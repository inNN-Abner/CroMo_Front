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

  useEffect(() => {
    async function loadHour() {
      try {
        const token = await SecureStore.getItemAsync("token")
        const selectedDate = await SecureStore.getItem("dataSelecionada")
        const monitor = await SecureStore.getItem("monitorSelecionado")
        //finalizar visualizacao das monitorias para selecao
        // de acordo com o monitor e datas selecionados
        const resp = await fetch(`${API_URL}/monitoria/showMonitor`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token || ''
          },
          body: JSON.stringify({
            data: selectedDate,
            idMonitor: monitor,
          }),
        })
  
        const status = resp.status
        const respostaBruta = await resp.text()
        const data = JSON.parse(respostaBruta)
  
        if (!Array.isArray(data)) {
          console.log("Resposta inesperada:", data)
          setHours([])
        return
        }
  
        const infos = data.map((m: any) => ({
          id: m.id,
          hour: m.horario,
          classRoom: m.local,
        }))
  
        setHours(infos)
      } catch (e) {
        console.log("erro ao buscar horários:", e)
        setHours([])
      }
    }
  
    loadHour()
  }, [])

    return hours
  }
