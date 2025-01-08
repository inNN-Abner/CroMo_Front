import React from 'react'
import { PageTitle } from '~/components/';
import { Container, Subcontainer } from '~/components/atoms/Container';

export const HomeScreen = ({ navigation }) => {
  return (
    <Container wdt='100' hgt='100'>
      <Subcontainer bg='darkRed' >
        <PageTitle>CroMo</PageTitle>
      </Subcontainer>
    </Container>
  )
}