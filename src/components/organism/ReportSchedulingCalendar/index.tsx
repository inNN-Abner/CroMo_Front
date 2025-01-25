import React from 'react';
import { AppointmentCalendar, Container, Headers, PageSubtitle, PageTitle, StylezedButton, Subcontainer  } from '~/components'

export const ReportSchedulingScreen = ({ navigation }) => {
  return (
    <Container align='flex-start' style={{ flex: 1 }}>      
    
    <Headers />
      <PageTitle color='greenWhite'>Monitorias</PageTitle>
      <PageSubtitle color='greenWhite'>Meus agendamentos</PageSubtitle>

      <Subcontainer align='center' justify='center' mgLeft='0' mgTop='15' hgt='380'>
        <AppointmentCalendar navigation={ navigation } />

        <StylezedButton
          bg='brisk'
          color='redDarkRed'
          fontSize='20'
          wdt='200'
          mgLeft='-100'
          mgTop='0'
          label={'+ Agendar monitoria'}
          onPress={() => {
            navigation.navigate('AddMonitoring')
          }}
        ></StylezedButton>

      </Subcontainer> 

    </Container>
  )
}