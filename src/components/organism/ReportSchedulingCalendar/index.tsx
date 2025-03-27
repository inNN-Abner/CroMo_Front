import React from 'react';
import { AddButtonText, AppointmentCalendar, Container, Headers, PageSubtitle, PageTitle, Subcontainer  } from '~/components'

export const ReportSchedulingScreen = ({ navigation }) => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <Headers />
      <PageTitle color='greenWhite'>Monitorias</PageTitle>
      <PageSubtitle color='greenWhite'>Meus agendamentos</PageSubtitle>

      <Subcontainer align='center' justify='center' mgLeft='0' mgTop='15' hgt='380'>
        <AppointmentCalendar navigation={ navigation } />

        <AddButtonText
          bg='brisk'
          color='redDarkRed'
          fontSize='18'
          wdt='250'
          hgt='25'
          mgLeft='-40'
          mgTop='3'
          align='flex-start'
          justify='flex-start'
          label={'Agendar monitoria'}
          onPress={() => {
            navigation.navigate('AddMonitoring')
          }}
        ></AddButtonText>

      </Subcontainer> 

    </Container>
  )
}