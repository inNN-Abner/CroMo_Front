import { useEffect, useState, useCallback } from 'react'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from "~/configs/config"
import { useFocusEffect } from '@react-navigation/native'
import { format, addHours } from 'date-fns'

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
  quantidade: string
  obs: string
}

export const useAgendamentoCalendar = () => { 
    const [monitoring, setMonitoring] = useState<Monitoria[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    async function loadMonitoring() {
        const today = new Date()
        today.setDate(today.getDate()-1)

            const token = await SecureStore.getItemAsync("token")
            if (!token) {
              console.log("Token não encontrado.")
              setIsLoaded(true)
              return
            }
            
            var userType = null, agendamentos
            const userData = await SecureStore.getItemAsync('user')
            const userJson = userData ? JSON.parse(userData) : null
            if(userJson != null){
                userType = userJson.tipo
                console.log("Tipo de usuário", userType)
            }

            try {
              if (userType == "Aluno"){
                console.log("TOKEN Monitoria:", token)
                const resp = await fetch(`${API_URL}/agendamento/aluno`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token || ''
                    },
                })

                if (!resp.ok) throw new Error(`Erro na requisição do agendamento: ${resp.status}`)
                const data = await resp.json()
            
              agendamentos = data.map((m) => {
                const dateUtc = new Date(m.data)
                const dateSaoPaulo = addHours(dateUtc, 3) // Corrige para GMT-3
                
                return {
                  id: m.id,
                  weekDay: m.dia_semana,
                  hour: m.horario,
                  class: m.materia,
                  icon: m.idFotoMateria,
                  locale: m.local,
                  info: `${m.horario} || (${m.local})`,
                  photo: m.idFotoMonitor,
                  monitorName: m.monitor,
                  quantidade: `Quantidade de alunos: ${m.quantidadeAluno}`,
                  obs: m.obs,
                  date: format(dateSaoPaulo, 'dd/MM/yyyy')
                }
              })}
  
              else if (userType == "Monitor"){
                console.log("TOKEN Monitoria:", token)
                const resp = await fetch(`${API_URL}/agendamento/monitor`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      'x-access-token': token || ''
                  },
                })

                  if (!resp.ok) throw new Error(`Erro na requisição do agendamento: ${resp.status}`)
                  const data = await resp.json()

                  agendamentos = data.map((m) => {
                    const dateUtc = new Date(m.data)
                    const dateSaoPaulo = addHours(dateUtc, 3) // Corrige para GMT-3

                  return {
                    id: m.id,
                    weekDay: m.dia_semana,
                    hour: m.horario,
                    class: m.materia,
                    icon: m.idFotoMateria,
                    locale: m.local,
                    info: `${m.horario} || (${m.local})`,
                    photo: m.idFotoMonitor,
                    monitorName: m.monitor,
                    quantidade: `Quantidade de alunos: ${m.quantidadeAluno}`,
                    obs: m.obs,
                    date: format(dateSaoPaulo, 'dd/MM/yyyy')
                    }
                  })}
              
            setMonitoring(agendamentos)
            
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