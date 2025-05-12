import React from 'react'
import { AddButtonText, AppointmentCalendar, Container, Headers, ListButtonText, PageSubtitle, PageTitle, Subcontainer  } from '~/components'
import * as SecureStore from 'expo-secure-store'

export const ReportSchedulingScreen = ({ navigation }) => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <Headers />
      <PageTitle color='greenWhite'>Monitorias</PageTitle>
      <PageSubtitle color='greenWhite'>Meus agendamentos</PageSubtitle>

      <Subcontainer align='center' justify='center' mgLeft='0' mgTop='40' hgt='380'>
        <AppointmentCalendar navigation={ navigation }/>

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
        ></AddButtonText>

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
        ></ListButtonText>

      </Subcontainer> 

    </Container>
  )
}