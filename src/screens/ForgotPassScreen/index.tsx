import React, { useState } from 'react'
const DarkLogin = require('~/../assets/LoginScreen_Dark.png')
const LightLogin = require ('~/../assets/LoginScreen_Light.png')
import { StylezedButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, LogoImage, TextInput, LoginTitle, LoginError, InfoText } from '~/components'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from '~/configs/config'

export const ForgotPassScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [emailValue, setEmailValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEsqueciSenha = async () => {
    console.log(API_URL)
    if (!emailValue) {
      setErrorMessage('Informe um e-mail válido')
      return
    }

    setLoading(true)
    try {
        const response = await fetch(`${API_URL}/esqueciSenha/esqueci-senha`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      })

      console.log('STATUS:', response.status)
      const data = await response.json()
      console.log('DATA:', data)
      
      if (response.ok) {
        Alert.alert('Sucesso', 'E-mail enviado com sucesso!')
        console.log('Função foi chamada - ENVIAR EMAIL') 
        navigation.navigate('Login')
      } else {
        setErrorMessage(data.error || 'Erro ao enviar e-mail')
        console.log('Função foi chamada - ERRO ENVIAR EMAIL') 
      }
    } catch (error) {
      setErrorMessage('Erro na conexão com o servidor')
      console.log('Função foi chamada - ERRO') 
    } finally {
      setLoading(false)
    }
    console.log('Função foi chamada - FINAL') 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>
        <Subcontainer align='center'>
          <LogoImage source={ isDark ? LightLogin : DarkLogin } />

        <Subcontainer 
            bg='gray' 
            mgLeft='-7'
            align='center'
            justify='center'
            wdt='290'
            hgt='80'
            pdd='10'
        >
            <InfoText
                color='white'
                fontSize='15'
            >
                Um link para definir uma nova senha será encaminhada no seu e-mail!
            </InfoText>
        </Subcontainer>

          <LoginTitle mgTop='25' mgLeft='0' alignSelf='flex-start'>
            E-mail
          </LoginTitle>
          
          <TextInput 
            placeholder={'Digite o seu e-mail institucional'} 
            keyboardType='email-address'
            value={emailValue}
            onChangeText={(text) => setEmailValue(text)}
            mgTop='5'
            mgLeft='0'
          />

        <Subcontainer 
            dir='row' 
            mgTop='50' 
            mgLeft='-7' 
            align='center' 
            justify='center'
            hgt='50'
        >
            <StylezedButton
                label='CANCELAR'
                bg='darkRed'
                mgTop='0'
                onPress={() => {
                    navigation.navigate('Login')}}
            />

            <StylezedButton
                label='ENVIAR'
                bg='darkGreen'
                mgTop='0'
                mgLeft='10'
                onPress={handleEsqueciSenha}
            />
            </Subcontainer>
        </Subcontainer>
        
      </Container>

    </TouchableWithoutFeedback>
  )
}