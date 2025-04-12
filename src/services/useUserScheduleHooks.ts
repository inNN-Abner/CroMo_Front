import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"
import * as SecureStore from "expo-secure-store"

type Agenda = {
  id: number
  weekDay: string
  class: string
  locale: string
  hour: string
}

export const useUserSchedule = () => {
  const [agendas, setAgendas] = useState<Agenda[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function loadUserSchedule() {
    setLoading(true)
    setError(null)

    try {
      const token = await SecureStore.getItemAsync("token");

      const response = await fetch(`${API_URL}/agenda`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token || "",
        },
      })

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Erro ao buscar agendas");
        return
      }

      const formatted = data.map((item: any) => ({
        id: item.id,
        weekDay: item.dia_semana.toUpperCase(),
        class: item.materia,
        locale: item.local,
        hour: item.horario.replace("-", "às"),
      }))

      setAgendas(formatted);
    } catch (error) {
      console.error("Erro ao buscar a agenda:", error)
      setError("Falha ao se comunicar com o servidor")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUserSchedule()
  }, [])

  return { agendas, loading, error };
}