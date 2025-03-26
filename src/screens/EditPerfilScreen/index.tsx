import React, { useState, useEffect } from 'react'
import { RedCancelButton, SaveButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, TextInput, LoginTitle, PerfilHeaders, PageTitle, CourseSelector, EditPhoto } from '~/components'
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import * as SecureStore from 'expo-secure-store'
//import { launchImageLibrary } from 'react-native-image-picker'

const imageMap = {
  1: require('~/../assets/Bag.png'),
  2: require('~/../assets/Book.png'),
  3: require('~/../assets/Helmet.png'),
}

export const EditPerfilScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [user, setUser] = useState(null)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [teamsValue, setTeamsValue] = useState('')
  const [photoUri, setPhotoUri] = useState(null)

  useEffect(() => {
    const loadUser = async () => {
      const userData = await SecureStore.getItemAsync('user')
      if (userData) {
        console.log('User data:', parsedUser) // Verifica se o email realmente está vindo
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        setNameValue(parsedUser.nome || '')
        setEmailValue(parsedUser.email || '') // Tenta diferentes chaves
        setTeamsValue(parsedUser.teams || '')
        setPhotoUri(imageMap[parsedUser.foto] || imageMap[1])
      }
    }
    loadUser()
  }, [])


  const handleSave = async() => {
    navigation.navigate('Perfil')
  }
  
  /*const pickImage = () => {
        launchImageLibrary(
          { mediaType: 'photo', quality: 1 },
          (response) => {
            if (!response.didCancel && !response.errorMessage && response.assets?.length) {
              setPhotoUri({ uri: response.assets[0].uri })
            }
          }
        )
    }*/

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>
        <PerfilHeaders />
        
        <Subcontainer mgLeft='0'>
        <PageTitle mgTop='-5'>Editar informações</PageTitle>

        <TouchableOpacity>
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
              value={teamsValue}
              onChangeText={(text) => setTeamsValue(text)}
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
              onPress={handleSave}
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
              onPress={handleSave}
            />
          </Subcontainer>
        </Subcontainer>
        
      </Container>

    </TouchableWithoutFeedback>
  )
}