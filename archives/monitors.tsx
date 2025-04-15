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
  email: string
  name: string
  photo: string
  monitorias: Monitoria[]
}

export const useMonitors = () => { 
  const [monitors, setMonitors] = useState<Monitor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadMonitor() {
      try {
        const token = await SecureStore.getItemAsync("token")
        const resp = await fetch(`${API_URL}/auth/monitoresMonitoria`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token || '',
          },
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
  
        const monitores = data.map((m: any) => ({
          id: m.id,
          email: m.email,
          name: m.nome,
          photo: m.idFoto,
          monitorias: m.monitorias,
          materia: m.monitorias?.[0]?.materia?.nome ?? 'Sem matéria'
        }))
  
        setMonitors(monitores)
      } catch (e) {
        console.log("erro: ", e)
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