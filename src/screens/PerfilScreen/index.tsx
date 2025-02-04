import React from 'react'
import ToggleThemeButton, { EditButton } from '~/components/atoms/Button';
import { HeaderText, PageTitle, PerfilCard, PerfilGrid, PerfilHeaders, Windows } from '~/components/';
import { Container, Subcontainer } from '~/components/atoms/Container';
import { LoginScreen } from '../LoginScreen';

export const PerfilScreen = ({ navigation }) => {
  
  return (
    <Container hgt='100'>
        <PerfilHeaders />
        <PageTitle mgTop='0'>Meu perfil</PageTitle>

      <Subcontainer align='center' mgLeft='0' mgTop='0' maxHgt='95'>
        <Windows 
          bg='darkGreen'
          align='center'
          justify='flex-start'
          dir='column'
          wdt='355'
        >
          <PerfilCard navigation={undefined} />

        <Subcontainer bg='darkGreen' wdt='350' mgLeft='0' mgTop='0' hgt='100' align='flex-start' dir='row'>

          <Subcontainer bg='darkGreen' mgLeft='-0' wdt='75' mgTop='0'>
              <HeaderText
                mgTop='5'
                mgLeft='10'
                color='lightGray'
                fontSize='16'
                >
                  Editar
              </HeaderText>
              <EditButton wdt='50' hgt='50' bdRd='15' mgTop='5' mgLeft='10'
                onPress={() => {
                  navigation.navigate('EditPerfil')}}/>
            </Subcontainer>

            <Subcontainer bg='darkGreen' mgLeft='0' wdt='75' mgTop='0'>
              <HeaderText
                mgTop='5'
                mgLeft='10'
                color='lightGray'
                fontSize='16'
                >
                  Tema
              </HeaderText>
              <ToggleThemeButton />
            </Subcontainer>

          </Subcontainer>

            <HeaderText
              mgTop='-10'
              mgLeft='10'
              color='lightGray'
              fontSize='16'
              >
                Minhas matérias
            </HeaderText>

            <PerfilGrid navigation={navigation} />

          </Windows>
  
        </Subcontainer>


    </Container>
  )
}