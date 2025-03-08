import React, { useState } from 'react'
const DarkLogin = require('~/../assets/LoginScreen_Dark.png')
const LightLogin = require ('~/../assets/LoginScreen_Light.png')
import { StylezedButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, LogoImage, TextInput, LoginTitle, LoginError } from '~/components'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

export const LoginScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async() => {
    navigation.navigate('HomeBottom')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>
        <Subcontainer align='center'>
          <LogoImage source={ isDark ? LightLogin : DarkLogin } />

          <LoginTitle mgTop='25' mgLeft='0' alignSelf='flex-start'>
            E-mail
          </LoginTitle>
          
          <TextInput 
            placeholder={'Digite o seu e-mail'} 
            keyboardType='email-address'
            value={emailValue}
            onChangeText={(text) => setEmailValue(text)}
            mgTop='5'
            mgLeft='0'
            />

          <LoginTitle mgTop='20' mgLeft='0' alignSelf='flex-start'>
            Senha
          </LoginTitle>

          <TextInput
            placeholder={'Digite a sua senha'} 
            keyboardType='default'
            secureTextEntry={true}
            value={passwordValue}
            onChangeText={(text) => setPasswordValue(text)}
            mgTop='5'
            mgLeft='0'
            />           

          <StylezedButton
            label='ENTRAR' 
            mgTop='30'
            onPress={handleLogin}
            />

          {errorMessage ? <LoginError>{errorMessage}</LoginError> : null}

          <StylezedButton
            label='CADASTRAR'
            bg='darkGreen'
            mgTop='10'
          />

          <StylezedButton
            label='Esqueci a senha'
            bg='brisk'
            color='darkRed'
            mgTop='70'
          /> 

        </Subcontainer>
        
      </Container>

    </TouchableWithoutFeedback>
  )
}