import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '~/services/firebase'
const DarkLogin = require('~/../assets/LoginScreen_Dark.png')
const LightLogin = require ('~/../assets/LoginScreen_Light.png')
import { StylezedButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, LogoImage, TextInput, LoginTitle, LoginError, InfoTextNoWrap } from '~/components'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'

export const ForgotPassScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [emailValue, setEmailValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEsqueciSenha = async () => {
    if (!emailValue) {
      setErrorMessage('Informe um e-mail válido')
      return
    }

    setLoading(true)
    setErrorMessage('')

    try {
      await sendPasswordResetEmail(auth, emailValue)  // Firebase cuidando de tudo!
      Alert.alert('Sucesso!', 'Verifique seu e-mail para redefinir sua senha.')
      navigation.navigate('Login')
    } catch (error: any) {
      console.log('Erro ao enviar reset:', error)

      if (error.code === 'auth/user-not-found') {
        setErrorMessage('E-mail não encontrado.')
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('E-mail inválido.')
      } else {
        setErrorMessage('Erro ao enviar e-mail de redefinição.')
      }
    } finally {
      setLoading(false)
    }
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
            hgt='100'
            pdd='10'
          >
            <InfoTextNoWrap
              color='white'
              fontSize='15'
            >
              Um link para redefinir sua senha será enviado para seu e-mail!
            </InfoTextNoWrap>
          </Subcontainer>

          <LoginTitle mgTop='25' mgLeft='0' alignSelf='flex-start'>
            E-mail
          </LoginTitle>
          
          <TextInput 
            placeholder={'Digite o seu e-mail institucional'} 
            keyboardType='email-address'
            value={emailValue}
            onChangeText={setEmailValue}
            mgTop='5'
            mgLeft='0'
          />

          {errorMessage !== '' && (
            <LoginError mgTop='10'>{errorMessage}</LoginError>
          )}

          <Subcontainer dir='row' mgTop='50' mgLeft='-7' align='center' justify='center' hgt='50'>
            <StylezedButton
              label='CANCELAR'
              bg='darkRed'
              mgTop='0'
              onPress={() => navigation.navigate('Login')}
            />

            <StylezedButton
              label={loading ? 'ENVIANDO...' : 'ENVIAR'}
              bg='darkGreen'
              mgTop='0'
              mgLeft='10'
              onPress={handleEsqueciSenha}
              disabled={loading}
            />
          </Subcontainer>
        </Subcontainer>
      </Container>

    </TouchableWithoutFeedback>
  )
}