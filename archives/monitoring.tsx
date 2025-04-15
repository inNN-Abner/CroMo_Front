import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"
import * as SecureStore from "expo-secure-store"

export const useMonitoring = async () => { 
    const [monitoring, setMonitoring] = useState([])
    const token = await SecureStore.getItemAsync("token")
    
  async function loadMonitoring(){
    const today = new Date()
    today.setDate(today.getDate() - 1)

    try{
        const resp = await fetch(`${API_URL}/monitoria/show`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token || ''
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