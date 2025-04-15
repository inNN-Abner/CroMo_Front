import { API_URL } from "~/configs/config"
import * as SecureStore from "expo-secure-store"
import { Alert } from "react-native"

export const useAgendaActions = (loadUserSchedule: () => Promise<void>) => {
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
            
            await loadUserSchedule()
            navigation.navigate('Perfil')
            
        } else {
            const data = await response.json()
            Alert.alert("Erro", data.error || "Não foi possível cadastrar.")
        } 
    } catch (error) {
        console.error("Erro ao enviar:", error)
        Alert.alert("Erro", "Falha ao conectar com o servidor.")
      }
    }
    
    const handleDelete = async (id: number) => {
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
    
        if (response.status === 204) {
            console.log('Agenda excluída com sucesso!')
            await loadUserSchedule()
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
    return { handleDelete, handleSubmit }  
}