import React, { useEffect, useState } from 'react'
import { AddButtonText, AppointmentCalendar, Container, Headers, ListButtonText, PageSubtitle, PageTitle, Subcontainer  } from '~/components'
import * as SecureStore from 'expo-secure-store'

export const ReportSchedulingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
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
      <Container align='flex-start' style={{ flex: 1 }}>      
      
      <Headers />
        <PageTitle color='greenWhite'>Monitorias</PageTitle>
        <PageSubtitle color='greenWhite'>Meus agendamentos</PageSubtitle>

        <Subcontainer align='center' justify='center' mgLeft='0' mgTop='40' hgt='380'>
          <AppointmentCalendar navigation={ navigation }/>

        {userType == 'Aluno' && (
          <AddButtonText
            bg='brisk'
            color='redDarkRed'
            fontSize='18'
            wdt='250'
            hgt='25'
            mgLeft='-40'
            mgTop='7'
            align='flex-start'
            justify='flex-start'
            label={'Agendar monitoria'}
            onPress={() => {
              navigation.navigate('AddMonitoring')
            }}
          />
          )
        }
          <ListButtonText
            bg='brisk'
            color='redDarkRed'
            fontSize='18'
            wdt='250'
            hgt='25'
            mgLeft='-40'
            mgTop='13'
            align='flex-start'
            justify='flex-start'
            label={'Visualizar agendamentos'}
            onPress={async() => {
              navigation.navigate('SummarySchedule')
              await SecureStore.setItem("allAppointments", '1')
            }}
          />
        </Subcontainer> 
      </Container>
    )
  }
