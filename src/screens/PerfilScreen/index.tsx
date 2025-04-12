import React from 'react'
import ToggleThemeButton, { ChatbotButton, EditButton, LogoutButton } from '~/components/atoms/Button'
import { HeaderText, PageTitle, PerfilCard, PerfilGrid, PerfilHeaders, Windows } from '~/components/'
import { Container, Subcontainer } from '~/components/atoms/Container'
import { API_URL } from '~/configs/config'
import * as SecureStore from 'expo-secure-store'

const logout = async () => {
  try{
    const resp = await fetch(`${API_URL}/auth/logout`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
    if (!resp.ok) throw new Error(`Erro na requisição: ${resp.status}`)
    
    await SecureStore.deleteItemAsync('user')
    await SecureStore.deleteItemAsync('token')
    
    } catch(e){
        console.log("erro: ", e)
    }
}

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

            <Subcontainer bg='darkGreen' mgLeft='0' wdt='75' mgTop='0'>
              <HeaderText
                mgTop='5'
                mgLeft='10'
                color='lightGray'
                fontSize='16'
                >
                  Ajuda
              </HeaderText>
              <ChatbotButton
                onPress={() => navigation.navigate('Chatbot')}
              />
            </Subcontainer>

            
            <Subcontainer bg='darkGreen' mgLeft='-0' wdt='75' mgTop='0'>
              <HeaderText
                mgTop='5'
                mgLeft='18'
                color='lightGray'
                fontSize='16'
                >
                  Sair
              </HeaderText>
              <LogoutButton wdt='50' hgt='50' bdRd='15' mgTop='5' mgLeft='10'
                onPress={() => { 
                  logout()
                  navigation.navigate('Login')}}/>
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