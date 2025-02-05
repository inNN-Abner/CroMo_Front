import React, { useState } from 'react'
import { CancelButton, RedCancelButton, SaveButton, StylezedButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import perfil from '~/../archives/perfil'
import { Container, Subcontainer, TextInput, LoginTitle, PerfilHeaders, PageTitle, CourseSelector, Photo, EditPhoto } from '~/components'
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

export const EditPerfilScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async() => {
    navigation.navigate('Perfil')
  }
  
    const [photoUri, setPhotoUri] = useState(perfil.photo)
    const defaultPhoto = typeof perfil.photo === 'string' ? { uri: perfil.photo } : perfil.photo;

    const pickImage = () => {
        launchImageLibrary(
          { mediaType: 'photo', quality: 1 },
          (response) => {
            if (!response.didCancel && !response.errorMessage && response.assets?.length) {
              setPhotoUri({ uri: response.assets[0].uri })
            }
          }
        )
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>
        <PerfilHeaders />
        
        <Subcontainer mgLeft='0'>
        <PageTitle mgTop='-5'>Editar informações</PageTitle>

        <TouchableOpacity onPress={pickImage}>
          <EditPhoto
            source={photoUri}
            hgt='145'
            wdt='100'
            bdRd='20'
            mgLeft='40'
            mgTop='10'
          />

        </TouchableOpacity>

          <LoginTitle mgTop='10' mgLeft='0' alignSelf='flex-start'>
            Nome completo
          </LoginTitle>
            <TextInput 
              placeholder={'Seu nome completo'} 
              keyboardType='text'
              value={nameValue}
              onChangeText={(text) => setNameValue(text)}
              mgTop='5'
              mgLeft='35'
              />

          <LoginTitle mgTop='10' mgLeft='0' alignSelf='flex-start'>
            E-mail institucional
          </LoginTitle>
            <TextInput
              placeholder={'email@fatec.sp.gov.br'} 
              keyboardType='email'
              value={emailValue}
              onChangeText={(text) => setEmailValue(text)}
              mgTop='5'
              mgLeft='35'
              />

          <LoginTitle mgTop='10' mgLeft='0' alignSelf='flex-start'>
            Teams
          </LoginTitle>
            <TextInput 
              placeholder={'Seu Teams'} 
              keyboardType='text'
              value={nameValue}
              onChangeText={(text) => setNameValue(text)}
              mgTop='5'
              mgLeft='35'
              />

          <LoginTitle mgTop='10' mgLeft='0' mgBottom='5' alignSelf='flex-start'>
            Curso
          </LoginTitle>
            <CourseSelector />

          <Subcontainer mgLeft='0' mgTop='20' dir='row' align='center' justify='center' hgt='100'>
            <RedCancelButton
                bg='everWhite'
                wdt='170'
                hgt='55'
                mgTop='5'
                mgRight='5'
                mgLeft='5'
                bdRd='15'
                color='darkRed'
                label={'CANCELAR'}
                onPress={handleLogin}
                fontSize='18'
            />
            
            <SaveButton
              label='SALVAR'
              fontSize='18'
              wdt='170'
              hgt='55'
              mgTop='5'
              mgLeft='5'
              mgRight='5'
              bdRd='10'
              bg='darkGreen'
              onPress={handleLogin}
            />
          </Subcontainer>
        </Subcontainer>
        
      </Container>

    </TouchableWithoutFeedback>
  )
}