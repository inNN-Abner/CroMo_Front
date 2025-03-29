import React, { useState } from 'react'
const DarkLogin = require('~/../assets/LoginScreen_Dark.png')
const LightLogin = require ('~/../assets/LoginScreen_Light.png')
import { StylezedButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, LogoImage, TextInput, LoginTitle, LoginError } from '~/components'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from '~/configs/config'

export const LoginScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async() => {
    setLoading(true)
      try {
        console.log('Enviando:', { email: emailValue, senha: passwordValue });

        const response = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailValue,
            senha: passwordValue,
          }),
        })
 
        const data = await response.json()
          
        if (data.token) {
          await SecureStore.setItemAsync('token', data.token)
          await SecureStore.setItemAsync('user', JSON.stringify({
            nome: data.nome,
            curso: data.curso,
            tipo: data.tipo,
            foto: data.foto,
            email: data.email
          }))
          navigation.replace('HomeBottom') 
        } else {
          Alert.alert('Erro', data.message || 'E-mail ou senha inválidos!')
        }
      } catch (error) {
        console.log('Erro na requisição:', error);

        console.error('Erro ao efetuar login:', error)
        Alert.alert('Erro', 'Não foi possível conectar ao servidor!')
      } finally {
        setLoading(false)
      }
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
            onPress={() => {
              navigation.navigate('Register')}}
          />

          <StylezedButton
            label='Esqueci a senha'
            bg='brisk'
            color='darkRed'
            mgTop='70'
            onPress={() => {
              navigation.navigate('ForgotPass')}}
          />

        </Subcontainer>
        
      </Container>

    </TouchableWithoutFeedback>
  )
}