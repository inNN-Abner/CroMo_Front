import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from "~/configs/config"

interface MonitoringItem {
  class: string
  info: string
  monitorName: string
  photo: string
  icon: string
}

export const useMonitoring = () => { 
    const [monitoring, setMonitoring] = useState<MonitoringItem[]>([])

    useEffect(() => {
        async function loadMonitoring() {
            const today = new Date()
            today.setDate(today.getDate() - 1)

            try {
                const token = await SecureStore.getItemAsync("token")
                const resp = await fetch(`${API_URL}/monitoria/show`, {
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

                setMonitoring(monitorias)
            } catch (e) {
                console.log("erro: ", e)
            }
        } 

        loadMonitoring()
    }, [])

    return monitoring
}
