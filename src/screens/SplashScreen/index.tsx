import React from 'react'
import { PageTitle, PageSubtitle, CardText  } from '../../components/';
import { Container, Subcontainer } from '../../components/atoms/Container';

export const SplashScreen = () => {
  return (
    <Container wdt='100' hgt='100'>
      <Subcontainer bg='darkRed' >
        <PageTitle>CroMo</PageTitle>
        <PageSubtitle>E-mail</PageSubtitle>
        <CardText>Senha</CardText>
      </Subcontainer>
    </Container>
  )
}