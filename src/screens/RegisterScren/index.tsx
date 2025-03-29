import React, { useState } from 'react'
const DarkLogin = require('~/../assets/LoginScreen_Dark.png')
const LightLogin = require ('~/../assets/LoginScreen_Light.png')
import { RedCancelButton, SaveButton, StylezedButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, LogoImage, TextInput, LoginTitle, LoginError } from '~/components'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from '~/configs/config'

export const RegisterScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordVerificationValue, setPasswordVerificationValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>
        <Subcontainer align='center'>
          <LogoImage source={ isDark ? LightLogin : DarkLogin } />

          <LoginTitle mgTop='0' mgLeft='0' alignSelf='flex-start'>
            Nome
          </LoginTitle>
          
          <TextInput 
            placeholder={'Digite o seu nome'} 
            keyboardType='normal'
            value={emailValue}
            onChangeText={(text) => setEmailValue(text)}
            mgTop='5'
            mgLeft='0'
          />



          <LoginTitle mgTop='15' mgLeft='0' alignSelf='flex-start'>
            E-mail institucional
          </LoginTitle>
          
          <TextInput 
            placeholder={'Digite o seu e-mail'} 
            keyboardType='email-address'
            value={emailValue}
            onChangeText={(text) => setEmailValue(text)}
            mgTop='5'
            mgLeft='0'
          />

          <LoginTitle mgTop='15' mgLeft='0' alignSelf='flex-start'>
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

          <LoginTitle mgTop='15' mgLeft='0' alignSelf='flex-start'>
            Confirmar a senha
          </LoginTitle>

          <TextInput
            placeholder={'Digite a sua senha novamente'} 
            keyboardType='default'
            secureTextEntry={true}
            value={passwordVerificationValue}
            onChangeText={(text) => setPasswordValue(text)}
            mgTop='5'
            mgLeft='0'
          />           

        <Subcontainer mgTop='35' dir='row' wdt='360' mgLeft='0' hgt='70' align='center' justify='center'>
          <StylezedButton
            label='CANCELAR' 
            wdt='160'
            mgTop='0'
            onPress={() => {
              navigation.navigate('Login')}}
          />

          {errorMessage ? <LoginError>{errorMessage}</LoginError> : null}

          <StylezedButton
            label='CADASTRAR'
            bg='darkGreen'
            mgTop='0'
            mgLeft='10'
            wdt='160'
            onPress={() => {
              navigation.navigate('Login')}} //fazer a função de registrar
          />
        </Subcontainer>
         

        </Subcontainer>
        
      </Container>

    </TouchableWithoutFeedback>
  )
}