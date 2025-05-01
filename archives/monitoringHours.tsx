import { useEffect, useState, useCallback } from 'react'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from "~/configs/config"
import { useFocusEffect } from '@react-navigation/native'

interface Monitoria {
  id: number
  weekDay: string
  hour: string
  class: string
  icon: number //icone da materia
  locale: string
  info: string
  photo: number //foto do monitor
  monitorName: string
  date: string
}

export const useAgendamento = () => { 
    const [monitoring, setMonitoring] = useState<Monitoria[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    async function loadMonitoring() {
        const today = new Date()
        today.setDate(today.getDate() - 1)

        const token = await SecureStore.getItemAsync("token")
        if (!token) {
            console.log("Token não encontrado.")
            setIsLoaded(true)
            return
        }

        try {
            console.log("TOKEN Monitoria:", token)
            const resp = await fetch(`${API_URL}/agendamento/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token || ''
                },
            })

            if (!resp.ok) throw new Error(`Erro na requisição do agendamento: ${resp.status}`)
            const data = await resp.json()


            const agendamentos = data.map((m) => ({
                id: m.id,
                weekDay: m.dia_semana,
                hour: m.horario,
                class: m.materia,
                icon: m.idFotoMateria,
                locale: m.local,
                info: `${m.horario} || (${m.local})`,
                photo: m.idFotoMonitor,
                monitorName: m.monitor,
                date: `${new Date(m.data).toLocaleDateString('pt-BR')}`
            }))

            setMonitoring(agendamentos)
            
            console.log(agendamentos)
            console.log("Token antes da requisição:", token)

        } catch (e) {
            console.log("Erro no agendamento: ", e)
        } finally {
            setIsLoaded(true)
        }
    } 

    useFocusEffect(
        useCallback(() => {
          loadMonitoring()
        }, [])
      )

    return { monitoring, isLoaded }
}