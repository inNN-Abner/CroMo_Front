import React from 'react'
import ToggleThemeButton from '~/components/atoms/Button';
import { Headers, PageTitle } from '~/components/';
import { Container } from '~/components/atoms/Container';

export const HomeScreen = ({ navigation }) => {
  
  return (
    <Container hgt='100'>
        <Headers />
        <PageTitle>Tela principal</PageTitle>
    </Container>
  )
}