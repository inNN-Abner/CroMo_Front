import React from 'react'
import ToggleThemeButton from '~/components/atoms/Button';
import { HeaderText, PageTitle, PerfilCard, PerfilGrid, PerfilHeaders, Windows } from '~/components/';
import { Container, Subcontainer } from '~/components/atoms/Container';

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

          <Subcontainer bg='darkGreen' wdt='350' mgLeft='0' mgTop='0' hgt='100' align='flex-start'>
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