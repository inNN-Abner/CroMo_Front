import React from 'react'
import ToggleThemeButton from '~/components/atoms/Button';
import { PageTitle, PerfilCard, PerfilHeaders } from '~/components/';
import { Container, Subcontainer } from '~/components/atoms/Container';

export const PerfilScreen = ({ route }) => {
  
  return (
    <Container hgt='100'>
        <PerfilHeaders />
        <PageTitle mgTop='0'>Meu perfil</PageTitle>

      <Subcontainer bg='gray' align='center' mgLeft='0' mgTop='0'>
        <PerfilCard navigation={undefined} />
        <ToggleThemeButton />
      </Subcontainer>

    </Container>
  )
}