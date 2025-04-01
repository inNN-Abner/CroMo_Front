import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"

export const useMonitors = () => { 
    const [monitor, setMonitor] = useState([])

  async function loadMonitor(){
    try{
        const resp = await fetch(`${API_URL}/auth/monitores`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!resp.ok) throw new Error(`Erro na requisição: ${resp.status}`)
        const data = await resp.json()
        const monitores = data.map((m) => ({
            id: m.id,
            email: m.email,
            name: m.nome,
            photo: m.idFoto
          }))
        console.log(monitores)
        setMonitor(monitores)
        } catch(e){
            console.log("erro: ", e)
        }
    } 
    useEffect(() => {
      loadMonitor()
         }, [])
    return monitor
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