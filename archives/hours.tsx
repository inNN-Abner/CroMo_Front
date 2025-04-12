import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"
import * as SecureStore from 'expo-secure-store'

type infos = {
    id: number
    hour: string
    classRoom: string
  }
  
export const useHours = () => { 
  const [hours, setHours] = useState<infos[]>([])

    async function loadHour() {
      try {
        const selectedDate = await SecureStore.getItem("dataSelecionada")
        const monitor = await SecureStore.getItem("monitorSelecionado")
        //finalizar visualizacao das monitorias para selecao
        // de acordo com o monitor e datas selecionados
        const resp = await fetch(`${API_URL}/monitoria/showMonitor`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: selectedDate,
            monitor: monitor,
          }),
        })
  
        const status = resp.status
        const respostaBruta = await resp.text()
        console.log("Resposta da API (bruta):", respostaBruta)
        const data = JSON.parse(respostaBruta)
  
        const infos = data.map((m: any) => ({
          id: m.id,
          hour: m.horario,
          classRoom: m.local,
        }))
  
        setHours(infos)
      } catch (e) {
        console.log("erro: ", e)
      }
    }
  
    useEffect(() => {
      loadHour()
    }, [])
  
    return hours
  }
export default [
   {
      id: 1,
      weekDay: 'SEGUNDA',
      classRoom: 'Sala 15',
      hour: '08h30 às 09h30',
      date: '2024-10-29',
      info: '08h30 às 09h30 (Sala 15)'
  },
  {
      id: 2,
      weekDay: 'TERÇA',
      classRoom: 'Sala 15',
      hour: '09h00 às 10h00',
      date: '2024-10-30',
      info: '09h00 às 10h00 (Sala 15)'
  },
  {
      id: 3,
      weekDay: 'QUARTA',
      classRoom: 'Sala 16',
      hour: '10h15 às 11h15',
      date: '2024-10-31',
      info: '10h15 às 11h15 (Sala 16)'
   },
   {
      id: 4,
      weekDay: 'QUINTA',
      classRoom: 'Laboratório A',
      hour: '10h15 às 12h15',
      date: '2024-10-31',
      info: '10h15 às 12h15 (Laboratório A)'
    },
    {
        id: 5,
        weekDay: 'SEGUNDA',
        classRoom: 'Sala 15',
        hour: '08h30 às 09h30',
        date: '2024-10-29',
        info: '08h30 às 09h30 (Sala 15)'
    },
    {
        id: 6,
        weekDay: 'TERÇA',
        classRoom: 'Sala 15',
        hour: '09h00 às 10h00',
        date: '2024-10-30',
        info: '09h00 às 10h00 (Sala 15)'
    },
    {
        id: 7,
        weekDay: 'QUARTA',
        classRoom: 'Sala 16',
        hour: '10h15 às 11h15',
        date: '2024-10-31',
        info: '10h15 às 11h15 (Sala 16)'
     },
     {
        id: 8,
        weekDay: 'QUINTA',
        classRoom: 'Laboratório A',
        hour: '10h15 às 12h15',
        date: '2024-10-31',
        info: '10h15 às 12h15 (Laboratório A)'
      },

]