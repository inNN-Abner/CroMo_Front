import React from 'react'
import { AddButtonText, ClassGrid, Container, EditInfoButton, Headers, HomeGrid, PageTitle, Subcontainer } from '~/components/';

export const HomeScreen = ({ navigation }) => {
  
  return (
    <Container hgt='100'>
        <Headers />
        <PageTitle>Monitorias do dia</PageTitle>

        <Subcontainer align='center' mgLeft='0'>

          <ClassGrid />
            <AddButtonText
              bg='brisk'
              color='redDarkRed'
              fontSize='18'
              wdt='250'
              hgt='25'
              mgLeft='-90'
              mgTop='3'
              align='flex-start'
              justify='flex-start'
              label={'Agendar monitoria'}
              onPress={() => {
                navigation.navigate('AddMonitoring')
              }}
            ></AddButtonText>

          <HomeGrid />
            <EditInfoButton
                bg='brisk'
                color='redDarkRed'
                fontSize='18'
                wdt='250'
                hgt='25'
                mgLeft='-90'
                mgTop='3'
                align='flex-start'
                justify='flex-start'
                label={'Editar informações'}
                onPress={() => {
                  navigation.navigate('EditInfo')
                }}
              ></EditInfoButton>

        </Subcontainer>

    </Container>
  )
}