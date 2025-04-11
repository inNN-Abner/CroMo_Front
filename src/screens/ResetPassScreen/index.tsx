import React, { useEffect, useState } from 'react'
const DarkLogin = require('~/../assets/LoginScreen_Dark.png')
const LightLogin = require ('~/../assets/LoginScreen_Light.png')
import { StylezedButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, LogoImage, TextInput, LoginTitle, InfoText } from '~/components'
import { Alert, Keyboard, Linking, TouchableWithoutFeedback } from 'react-native'
import { API_URL } from '~/configs/config'
import * as LinkingExpo from 'expo-linking'

export const ForgotPassScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [newPassValue, setNewPassValue] = useState('')
  const [confirmPassValue, setConfirmPassValue] = useState('')
  const [token, setToken] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getTokenFromUrl = async () => {
      const url = await Linking.getInitialURL()
      if (url) {
        const parsed = LinkingExpo.parse(url)
        const tokenParam = Array.isArray(parsed.queryParams?.token)
          ? parsed.queryParams?.token[0]
          : parsed.queryParams?.token
        if (tokenParam) {
          setToken(tokenParam)
        } else {
          Alert.alert('Erro', 'Token inválido ou ausente.')
          navigation.navigate('Login')
        }
      }
    }
  
    getTokenFromUrl()
  }, [])
  

  const handleResetSenha = async () => {
    if (!newPassValue || !confirmPassValue) {
      Alert.alert('Erro', 'Preencha todos os campos.')
      return
    }

    if (newPassValue !== confirmPassValue) {
      Alert.alert('Erro', 'As senhas não coincidem.')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/esqueciSenha/redefinir-senha`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          novaSenha: newPassValue,
        }),
      })

      const data = await response.json()
      if (response.ok) {
        Alert.alert('Sucesso', 'Senha redefinida com sucesso!')
        navigation.navigate('Login')
      } else {
        Alert.alert('Erro', data.error || 'Erro ao redefinir a senha.')
      }
    } catch (err) {
      Alert.alert('Erro', 'Erro de conexão.')
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
            Nova senha
          </LoginTitle>
          
          <TextInput 
            placeholder={'Digite sua nova senha'} 
            keyboardType='password'
            value={newPassValue}
            onChangeText={(text) => setNewPassValue(text)}
            mgTop='5'
            mgLeft='0'
          />

          <LoginTitle mgTop='25' mgLeft='0' alignSelf='flex-start'>
            Confirmar nova senha
          </LoginTitle>
          
          <TextInput 
            placeholder={'Confirme sua nova senha'} 
            keyboardType='password'
            value={confirmPassValue}
            onChangeText={(text) => setConfirmPassValue(text)}
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
                onPress={handleResetSenha}
            />
            </Subcontainer>
        </Subcontainer>
        
      </Container>

    </TouchableWithoutFeedback>
  )
}