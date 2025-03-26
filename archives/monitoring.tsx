import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"

export const useMonitoring = () => { 
    const [monitoring, setMonitoring] = useState([])

  async function loadMonitoring(){
    const today = new Date()
    today.setDate(today.getDate() - 1)
    const todayForm = today.toISOString().split("T")[0]
    try{
        const resp = await fetch(`${API_URL}/show`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: todayForm,
            }),
        })

        if (!resp.ok) throw new Error(`Erro na requisição: ${resp.status}`)

        const data = await resp.json()
        setMonitoring(data.map((m) => ({
            id: m.id,
            materia: m.materia.nome,
            dia_semana: m.dia_semana,
            horario: `${m.horario_inicio} - ${m.horario_fim}`,
            local: m.local
              ? m.local.numero
                ? `${m.local.tipo} ${m.local.numero}`
                : `${m.local.tipo}`
              : '',
              //add nome do monitor
          })))
            
        } catch(e){
            console.log("erro: ", e)
        }
    } 
    useEffect(() => {
        loadMonitoring()
         }, [])
        
    return monitoring
    }