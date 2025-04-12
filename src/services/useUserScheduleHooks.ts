import { useEffect, useState } from "react"
import { API_URL } from "~/configs/config"
import * as SecureStore from "expo-secure-store"
import { Alert } from "react-native"

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
      const token = await SecureStore.getItemAsync("token")

      const response = await fetch(`${API_URL}/agenda`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token || "",
        },
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Erro ao buscar agendas")
        return
      }

      const formatted = data.map((item: any) => ({
        id: item.id,
        weekDay: item.dia_semana.toUpperCase(),
        class: item.materia,
        locale: item.local,
        hour: item.horario.replace("-", "às"),
      }))

      setAgendas(formatted)
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

  //Delete
  async function handleDelete(id: number) {
    try {
      const token = await SecureStore.getItemAsync("token")
  
      if (!token) {
        console.log('Token não encontrado, usuário não está logado!')
        return
      }

      const response = await fetch(`${API_URL}/agenda/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token || '',
        }
      })
  
      console.log('Resposta status:', response.status)
  
      if (response.status === 204) {
        console.log('Agenda excluída com sucesso!')
        loadUserSchedule()
        return
      }
  
      const contentType = response.headers.get("content-type")
  
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json()
        console.log('Resposta JSON:', data)
  
        if (!response.ok) {
          console.log('Erro ao excluir:', data.error || 'Erro desconhecido.')
        }
      } else {
        const text = await response.text()
        console.log('Resposta texto (provável HTML):', text)
      }
  
    } catch (error) {
      console.error('Falha ao excluir agenda:', error)
    }
  }

  const handleSubmit = async (navigation: any, day: string, startTime: string, endTime: string, materia: string, locale: number | null) => {

    if (!day || !startTime || !endTime || !materia || locale === null) {
      Alert.alert("Atenção", "Preencha todos os campos antes de salvar.")
      return
    }
  
    try {
      const token = await SecureStore.getItemAsync("token")
  
      const response = await fetch(`${API_URL}/agenda`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token || ''
        },
        body: JSON.stringify({
          dia_semana: day,
          horario_inicio: startTime,
          horario_fim: endTime,
          idLocal: Number(locale),
          nomeMateria: materia
        })
      })
  
      if (response.ok) {
        Alert.alert("Sucesso", "Horário adicionado com sucesso!")
        console.log('Dados para enviar:', {
          dia_semana: day,
          horario_inicio: startTime,
          horario_fim: endTime,
          nomeMateria: materia,
          idLocal: locale
        })
        
        loadUserSchedule()
        navigation.navigate('Perfil')
      } else {
        const data = await response.json()
        console.log('Dados para enviar:', {
          dia_semana: day,
          horario_inicio: startTime,
          horario_fim: endTime,
          nomeMateria: materia,
          idLocal: locale
        })
        
        Alert.alert("Erro", data.error || "Não foi possível cadastrar.")
      }
    } catch (error) {
      console.log('Dados para enviar:', {
        dia_semana: day,
        horario_inicio: startTime,
        horario_fim: endTime,
        nomeMateria: materia,
        idLocal: locale
      })
      
      console.error("Erro ao enviar:", error)
      Alert.alert("Erro", "Falha ao conectar com o servidor.")
    }
  }
    
  return { agendas, loading, error, handleDelete, handleSubmit }
}