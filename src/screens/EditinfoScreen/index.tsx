import React from 'react'
import { Container, EditInfo, Headers, PageSubtitle, PageTitle, Subcontainer } from '../../components'

export const EditInfoScreen = ({ navigation }) => {
  return (
    <Container>      
    
    <Headers />
      <PageTitle>Lembretes e avisos</PageTitle>
      <PageSubtitle>Editar lembretes e avisos</PageSubtitle>

      <Subcontainer align='center' mgLeft='15' mgTop='0'>
        <EditInfo  />
      </Subcontainer>
    </Container>
  )
}