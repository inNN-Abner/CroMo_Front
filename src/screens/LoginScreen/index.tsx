import React, { useState } from 'react'
import { useTheme } from '~/context/ThemeContext'
import { StylezedButton, Container, Subcontainer, LogoImage, TextInput, LoginTitle, LoginError } from '~/components'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from '~/configs/config'
import { auth } from '~/services/firebase'
import { getIdToken, signInWithEmailAndPassword } from 'firebase/auth'

const DarkLogin = require('~/../assets/LoginScreen_Dark.png')
const LightLogin = require ('~/../assets/LoginScreen_Light.png')

export const LoginScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const backgroundColor = errorMessage == '' ? 'brisk' : 'darkRed' 

  const loginWithFirebaseAndBackend = async (email, senha) => {
    try {
      console.log('Tentando fazer login no Firebase...') 

      const firebaseUser = await signInWithEmailAndPassword(auth, email, senha) 
      console.log('Usuário autenticado no Firebase:', firebaseUser) 

      if (!firebaseUser?.user) {
        throw new Error("Usuário não autenticado no Firebase") 
      }

      const token = await getIdToken(firebaseUser.user) 
        if (!token) {
      throw new Error("Token não obtido") 
    }      
    console.log('Token obtido do Firebase:', token) 

      const response = await fetch(`${API_URL}/auth/firebase-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-firebase-token': token
        },
        body: JSON.stringify({ email })
      }) 
      console.log('Resposta da API:', response) 
  
      const data = await response.json() 
      console.log('Dados recebidos da API:', data) 

      if (!response.ok) throw new Error(data.error) 
  
      await SecureStore.setItemAsync('user', JSON.stringify(data.user)) 
      await SecureStore.setItemAsync('token', data.token) 
      
      console.log('Data.user:', data.user)
      console.log('Data.token:', data.token)

      return data 
  
    } catch (error) {
      console.log('Erro no login:', error) 
      throw error 
    }
  } 
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container align='center'>
        <Subcontainer align='center'>
          <LogoImage source={ isDark ? LightLogin : DarkLogin } />

          <Subcontainer bg={backgroundColor} justify='center' maxHgt='5' mgTop='-5' mgLeft='0' wdt='300'>
            {errorMessage ? <LoginError alignSelf='center' mgLeft='0' mgTop='0' >{errorMessage}</LoginError> : null}
          </Subcontainer>
          
          <LoginTitle mgTop='15' mgLeft='0' alignSelf='flex-start'>
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
            label={loading ? 'Entrando...' : 'ENTRAR'}
            mgTop='30'
            onPress={async () => {
              setErrorMessage('')
              setLoading(true) 
              try {
                const data = await loginWithFirebaseAndBackend(emailValue, passwordValue) 
                
                if (data?.token) {
                  await SecureStore.setItemAsync('token', data.token)
                  await SecureStore.setItemAsync('user', JSON.stringify(data.user))
                  console.log('Token salvo no SecureStore:', data.token);
                  navigation.navigate('HomeBottom')
               }

              } catch (error) {
                setErrorMessage('E-mail ou senha inválidos')
              } finally {
                setLoading(false) 
              }
            }}
            disabled={loading}
          />

          <StylezedButton
            label='CADASTRAR'
            bg='darkGreen'
            mgTop='10'
            onPress={() => navigation.navigate('Register')}
          />

          <StylezedButton
            label='Esqueci a senha'
            wdt='250'
            bg='brisk'
            color='darkRed'
            mgTop='55'
            onPress={() => navigation.navigate('ForgotPass')}
          />

        </Subcontainer>
      </Container>
    </TouchableWithoutFeedback>
  )
}