import React from 'react'
import { ClassGrid, Container, Headers, HomeGrid, PageTitle, StylezedButton, Subcontainer } from '~/components/';

export const HomeScreen = ({ navigation }) => {
  
  return (
    <Container hgt='100'>
        <Headers />
        <PageTitle>Monitorias do dia</PageTitle>

        <Subcontainer align='center' mgLeft='0'>
          <ClassGrid />

          <StylezedButton
            bg='brisk'
            color='redDarkRed'
            fontSize='20'
            wdt='200'
            mgLeft='-150'
            mgTop='0'
            label={'+ Agendar monitoria'}
            onPress={() => {
              navigation.navigate('AddMonitoring')
            }} />

          <HomeGrid />
        </Subcontainer>

    </Container>
  )
}