import React from 'react'
import { Container, IdentificationCard, Windows, Subcontainer, HeaderText, Headers, PageTitle, PageSubtitle, ContactsDetailGrid  } from '../../components'

export const ContactsDetailScreen = ({ route, navigation }) => {

  return (
    <Container align='flex-start'>

      <Headers />

      <PageTitle color='greenWhite'>Contatos</PageTitle>
      <PageSubtitle color='greenWhite'>Informações do professor</PageSubtitle>

      <Subcontainer align='center' mgLeft='0' mgTop='0' maxHgt='85'>
        
        <Windows 
          bg='darkGreen'
          align='center'
          justify='flex-start'
          dir='column'
        >
          <IdentificationCard route={route} />

          <HeaderText
            mgTop='5'
            mgLeft='12'
            color='lightGray'
            fontSize='16'
            >
              Horários de monitoria
          </HeaderText>

          <ContactsDetailGrid navigation={navigation} />

        </Windows>

      </Subcontainer>

    </Container>
  )
}