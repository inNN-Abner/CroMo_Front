import React from 'react'
import ToggleThemeButton from '~/components/atoms/Button';
import { PageTitle, PerfilHeaders } from '~/components/';
import { Container } from '~/components/atoms/Container';

export const PerfilScreen = ({ navigation }) => {
  
  return (
    <Container hgt='100'>
        <PerfilHeaders />
        <PageTitle mgTop='0'>Tela de perfil</PageTitle>
        <ToggleThemeButton />
    </Container>
  )
}