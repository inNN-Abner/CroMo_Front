import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { AddButtonText, ClassGrid, Container, Headers, HomeGrid, InfoTextNoWrap, ListButtonText, PageTitle, Subcontainer } from '~/components/';

export const HomeScreen = ({ navigation }) => {
  const [userType, setUserType] = useState(null)
  
  useEffect(() => {
      const loadUserType = async () => {
        try {
          const userData = await SecureStore.getItemAsync('user')
          const userJson = userData ? JSON.parse(userData) : null
          if (userJson) {
            setUserType(userJson.tipo)
          }
        } catch (error) {
          console.error('Erro ao carregar dados do usuário:', error)
        }
      }
  
      loadUserType()
    }, [])

  return (
    <Container hgt='100'>
      <Headers />
      <PageTitle>Monitorias do dia</PageTitle>

      <Subcontainer align='center' mgLeft='0'>
        <ClassGrid />

      { userType == "Aluno" ? (
        <AddButtonText
          bg='brisk'
          color='redDarkRed'
          fontSize='18'
          wdt='250'
          hgt='30'
          mgLeft='-90'
          mgTop='7'
          align='flex-start'
          justify='flex-start'
          label={'Agendar monitoria'}
          onPress={() => {
            navigation.navigate('AddMonitoring')
          }}
      />
      ) : (
        <ListButtonText
          bg='brisk'
          color='redDarkRed'
          fontSize='18'
          wdt='250'
          hgt='30'
          mgLeft='-90'
          mgTop='7'
          align='flex-start'
          justify='flex-start'
          label={'Visualizar agendamentos'}
          onPress={async() => {
            navigation.navigate('SummarySchedule')
            await SecureStore.setItem("allAppointments", '1')
          }}
        />
      )}

      <HomeGrid />
      
      </Subcontainer>
    </Container>
  )
}