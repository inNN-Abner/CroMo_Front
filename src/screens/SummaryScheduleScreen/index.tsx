import React from 'react'
import { Container, Headers, PageSubtitle, PageTitle, Subcontainer, SummarySchedule  } from '../../components'

export const SummaryScheduleScreen = ({ navigation }) => {
  return (
    <Container>      
    
    <Headers />
      <PageTitle>Monitorias</PageTitle>
      <PageSubtitle>Minhas monitorias agendadas</PageSubtitle>

      <Subcontainer align='center' mgLeft='17' mgTop='0'>
        <SummarySchedule navigation={navigation} />
      </Subcontainer>
    </Container>
  )
}