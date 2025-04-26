import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from "~/configs/config"

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

    useEffect(() => {
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
                  icon: m.idFotoMateria, //icone da materia
                  locale: m.local,
                  info: `${m.horario} || (${m.local})`,
                  photo: m.idFotoMonitor, //foto do monitor
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

        loadMonitoring()
    }, [])

    return { monitoring, isLoaded }
}
/*export default [
    {
      id: 1,
      weekDay: 'SEGUNDA',
      hour: '08h30 às 09h30',
      class: 'Gestão de projetos',
      icon: require('../assets/ProjectManager.png'),
      locale: 'Sala 13',
      info: '08h30 às 09h30 || (Sala 13)',
      photo: require('../assets/Icon_AlvoDumbledore.png'), 
      monitorName: 'Alvo Dumbledore',
      date: '30/01/2025'
    },
    {
      id: 2,
      weekDay: 'TERÇA',
      hour: '08h30 às 10h30',
      class: 'Sociedade e tecnologia',
      icon: require('../assets/TechnologySociety.png'),
      locale: 'Sala 07',
      info: '08h30 às 09h30 || (Sala 07)',
      photo: require('../assets/Icon_FilioFlitwick.png'),
      monitorName: 'Fílio Flitwick',
      date: '29/01/2025'
    },
    {
      id: 3,
      weekDay: 'QUARTA',
      hour: '08h30 às 09h30',
      class: 'Gestão de projetos',
      icon: require('../assets/ProjectManager.png'),
      locale: 'Laboratório 13',
      info: '08h30 às 09h30 || (Laboratório 13)',
      photo: require('../assets/Icon_FilioFlitwick.png'),
      monitorName: 'Fílio Flitwick',
      date: '29/01/2025'
    },
    {
      id: 4,
      weekDay: 'QUARTA',
      hour: '08h30 às 09h30',
      class: 'Interação Humano-Computador',
      icon: require('../assets/IHC.png'),
      locale: 'Sala 07',
      info: '08h30 às 09h30 || (Sala 07)',
      photo: require('../assets/Icon_SeveroSnape.png'),
      monitorName: 'Severo Snape',
      date: '29/01/2025'
    },
    {
      id: 5,
      weekDay: 'SEXTA',
      hour: '14h30 às 15h30',
      class: 'Transfiguração',
      icon: require('../assets/Transfiguration.jpg'),
      locale: 'Laboratório 03',
      info: '14h30 às 15h30 || (Laboratório 03)',
      photo: require('../assets/Icon_RolandaHooch.png'),
      monitorName: 'Rolanda Hooch',
      date: '29/01/2025'
    },
    {
      id: 6,
      weekDay: 'SÁBADO',
      hour: '08h30 às 09h30',
      class: 'Gestão de projetos',
      icon: require('../assets/ProjectManager.png'),
      locale: 'Sala 13',
      info: '08h30 às 09h30 || (Sala 13)',
      photo: require('../assets/Icon_AlvoDumbledore.png'), 
      monitorName: 'Alvo Dumbledore',
      date: '29/01/2025'
    },
    {
      id: 7,
      weekDay: 'QUARTA',
      hour: '08h30 às 09h30',
      class: 'Gestão e governaça de TI',
      icon: require('../assets/IHC.png'),
      locale: 'Sala 07',
      info: '08h30 às 09h30 || (Sala 07)',
      photo: require('../assets/Icon_SeveroSnape.png'),
      monitorName: 'Severo Snape',
      date: '29/01/2025'
    },
    {
      id: 8,
      weekDay: 'SEXTA',
      hour: '14h30 às 15h30',
      class: 'Transfiguração',
      icon: require('../assets/Transfiguration.jpg'),
      locale: 'Sala 03',
      info: '14h30 às 15h30 || (Sala 03)',
      photo: require('../assets/Icon_RolandaHooch.png'),
      monitorName: 'Rolanda Hooch',
      date: '29/01/2025'
    },
  ]*/