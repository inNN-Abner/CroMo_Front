import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"

export const useMonitoring = () => { 
    const [monitoring, setMonitoring] = useState([])

  async function loadMonitoring(){
    const today = new Date()
    today.setDate(today.getDate() - 1)

    try{
        const resp = await fetch(`${API_URL}/monitoria/show`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: today,
            }),
        })

        if (!resp.ok) throw new Error(`Erro na requisição: ${resp.status}`)
        const data = await resp.json()
        const monitorias = data.map((m) => ({
            class: m.materia,
            info: m.horario,
            monitorName: m.monitor,
            photo: m.foto
          }))
        //if (!monitorias) setMonitoring([{class: "Sem monitorias",info:"--", monitorName: "Sem monitoria", photo:""}])
        setMonitoring(monitorias)
        } catch(e){
            console.log("erro: ", e)
        }
    } 
    useEffect(() => {
        loadMonitoring()
         }, [])
    return monitoring
    }