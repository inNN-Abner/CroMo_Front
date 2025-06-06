import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"
import * as SecureStore from "expo-secure-store"

type Monitoria = {
  id: number
  materia: {
    id: number
    nome: string
  }
}

type Monitor = {
  materia: string
  id: number
  name: string
  photo: string
 // monitorias: Monitoria[]
  materiaFoto: string
}

export const useMonitors = () => { 
  const [monitors, setMonitors] = useState<Monitor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadMonitor() {
      try {
        const token = await SecureStore.getItemAsync("token")
        const dataSelecionada = await SecureStore.getItemAsync('dataSelecionada')
        const resp = await fetch(`${API_URL}/monitoria/show`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token || '',
          },
          body: JSON.stringify({
            data: dataSelecionada,
          }),
        })
  
        if (!resp.ok) {
          setError(`Erro na requisição: ${resp.status}`)
          setMonitors([])
          return
        }
  
        const respostaBruta = await resp.text()
        const data = JSON.parse(respostaBruta)
  
        if (!Array.isArray(data)) {
          console.log("Resposta inesperada:", data)
          setError("Formato inválido de dados recebidos!")
          setMonitors([])
          return
        }
  
        const monitoresUnicosMap = new Map<number, Monitor>()

        data.forEach((m: any) => {
          if (!monitoresUnicosMap.has(m.idMonitor)) {
            monitoresUnicosMap.set(m.idMonitor, {
              id: m.idMonitor,
              name: m.monitor,
              photo: m.idFotoMonitor,
              materiaFoto: m.idFoto,
              materia: m.materia ?? 'Sem matéria',
            })
          }
        })

        const monitores = Array.from(monitoresUnicosMap.values())
        setMonitors(monitores)
      } catch (e) {
        console.log("erro Monitores: ", e)
        setError("Falha ao carregar monitores.")
      } finally {
        setLoading(false)
      }
    }
  
    loadMonitor()
  }, [])
    
    return { monitors, loading, error }
  }

/*export default [
    {
      id: 1,
      name: 'Alvo Dombledore',
      info: 'alvo.dumbledore@fatec.sp.gov.br | Alvo.Dumbledore_01',
      photo: require('../assets/Icon_AlvoDumbledore.png'),
      type: 'Monitor',
      email: 'alvo.dumbledore@fatec.sp.gov.br',
      teams: 'Alvo.Dumbledore_01'
    },
    {
      id: 2,
      name: 'Fílio Flitwick',
      info: 'filio.flitwick@fatec.sp.gov.br | Filio.Flitwick_02',
      photo: require('../assets/Icon_FilioFlitwick.png'),
      type: 'Monitor',
      email: 'filio.flitwick@fatec.sp.gov.br',
      teams: 'Filio.Flitwick_02'
    },
    {
      id: 3,
      name: 'Severo Snape',
      info: 'severo.snape@fatec.sp.gov.br | Severo.Snape_01',
      photo: require('../assets/Icon_SeveroSnape.png'),
      type: 'Professor',
      email: 'severo.snape@fatec.sp.gov.br',
      teams: 'Severo.Snape_01'
    },
    {
      id: 4,
      name: 'Rolanda Hooch',
      info: 'roland.hooch@fatec.sp.gov.br | Rolanda.Hooch_02',
      photo: require('../assets/Icon_RolandaHooch.png'),
      type: 'Professor',
      email: 'roland.hooch@fatec.sp.gov.br',
      teams: 'Rolanda.Hooch_02'
    },
]*/