import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from "~/configs/config"

interface MonitoringItem {
  class: string
  info: string
  monitorName: string
  photo: string
  icon?: string
  materiaFoto?: string
}

export const useMonitoring = () => { 
    const [monitoring, setMonitoring] = useState<MonitoringItem[]>([])

    useEffect(() => {
        async function loadMonitoring() {
            const today = new Date()
            today.setDate(today.getDate() - 1)

            const token = await SecureStore.getItemAsync("token")
            if (!token) {
              console.log("Token não encontrado.")
              return
            }

            try {
                console.log("TOKEN Monitoria:", token)
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
                if (!resp.ok) throw new Error(`Erro na requisição da monitoria: ${resp.status}`)
                const data = await resp.json()


                console.log("Resposta da API (bruta) na monitoria:", data)

                const monitorias = data.map((m) => ({
                    class: m.materia,
                    info: m.horario,
                    monitorName: m.monitor,
                    photo: m.foto,
                    materiaFoto: (m.idFoto)
                }))

                setMonitoring(monitorias)
                
                console.log("Token antes da requisição:", token);

            } catch (e) {
                console.log("Erro na monitoria: ", e)
            }
        } 

        loadMonitoring()
    }, [])

    return monitoring
}
