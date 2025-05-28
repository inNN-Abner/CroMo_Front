import React, { useEffect, useState } from 'react'
import { AddButtonText, AppointmentCalendar, Container, Headers, ListButtonText, PageSubtitle, PageTitle, Subcontainer, ViewClassButton  } from '~/components'
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
        <PageSubtitle mgBottom='25' color='greenWhite'>Meus agendamentos</PageSubtitle>

        <Subcontainer align='center' justify='center' mgLeft='0' mgTop='0' hgt='500'>
          <AppointmentCalendar navigation={ navigation }/>

        {userType == 'Aluno' && (
          <AddButtonText
            bg='darkRed'
            color='everWhite'
            fontSize='18'
            wdt='250'
            hgt='35'
            mgLeft='-60'
            mgTop='10'
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
            bg='darkRed'
            color='everWhite'
            fontSize='18'
            wdt='250'
            hgt='35'
            mgLeft='-60'
            mgTop='10'
            align='flex-start'
            justify='flex-start'
            label={'Visualizar agendamentos'}
            onPress={async() => {
              navigation.navigate('SummarySchedule')
              await SecureStore.setItem("allAppointments", '1')
            }}
          />
          
{/*Alteração para tela de lista de monitorias*/}
          <ViewClassButton
            bg='darkRed'
            color='everWhite'
            fontSize='18'
            wdt='250'
            hgt='35'
            mgLeft='-60'
            mgTop='10'
            align='flex-start'
            justify='flex-start'
            label={'Ver matérias'}
            onPress={async() => {
              navigation.navigate('ClassList')
            }}
          />
        </Subcontainer> 
      </Container>
    )
  }
