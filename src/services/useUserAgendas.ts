import { useState, useEffect } from 'react'
import { API_URL } from '~/configs/config'
import * as SecureStore from 'expo-secure-store'

export const useUserAppointments = () => {
  const [agendamentos, setAgendamentos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAgendamentos() {
      try {
        const token = await SecureStore.getItemAsync('token')
        const response = await fetch(`${API_URL}/agendamento`, {
          headers: { 'x-access-token': token || '' }
        })
        const data = await response.json()
        setAgendamentos(data)
      } catch (e) {
        console.error("Erro ao buscar agendamentos:", e)
      } finally {
        setLoading(false)
      }
    }

    fetchAgendamentos()
  }, [])

  return { agendamentos, loading }
}
