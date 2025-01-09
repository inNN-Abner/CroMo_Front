import React from 'react'
import ToggleThemeButton from '~/components/atoms/Button';
import { Headers } from '~/components/';
import { Container } from '~/components/atoms/Container';

export const HomeScreen = ({ navigation }) => {
  
  return (
    <Container>
        <Headers />
        <ToggleThemeButton />
    </Container>
  )
}