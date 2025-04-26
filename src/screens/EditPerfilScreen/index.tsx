import React, { useState, useEffect } from 'react'
import { RedCancelButton, SaveButton } from '~/components/atoms/Button'
import { useTheme } from '~/context/ThemeContext'
import { Container, Subcontainer, TextInput, LoginTitle, PerfilHeaders, PageTitle, EditPhoto, PhotoSelectorModal } from '~/components'
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import * as SecureStore from 'expo-secure-store'

export const imageMap: Record<number, any> = {
  1: require('~/../assets/Helmet.png'),
  2: require('~/../assets/Book.png'),
  3: require('~/../assets/Transfiguration.jpg'),
  4: require('~/../assets/Helmet.png'),
  5: require('~/../assets/TechnologySociety.png')
}

export const EditPerfilScreen = ({ navigation }) => {
  const { isDark } = useTheme()
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [teamsValue, setTeamsValue] = useState('')
  const [raValue, setRaValue] = useState('')
  const [userData, setUserData] = useState<{ nome: string; foto: number; curso: string } | null>(null)
  const [photoModalVisible, setPhotoModalVisible] = useState(false)
  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null)


  useEffect(() => {
    const loadUser = async () => {
    const userData = await SecureStore.getItemAsync('user')
    
      if (userData) {
        const data = JSON.parse(userData)
        setUserData(data)
        setNameValue(data.nome || '')
        setEmailValue(data.email || '')
        setTeamsValue(data.email || '')
        setRaValue(data.ra || '')
      }
    }
    loadUser()
  }, [])

  const handleSave = async() => {
    navigation.navigate('Perfil')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <Container align='center'>
        <PerfilHeaders />
        
        <Subcontainer mgLeft='0'>
        <PageTitle mgTop='-5'>Editar informações</PageTitle>

        <TouchableOpacity onPress={() => setPhotoModalVisible(true)}>
        {userData && (
          <EditPhoto
            idFoto={selectedPhotoId ?? userData.foto}
            hgt='145'
            wdt='100'
            bdRd='20'
            mgLeft='40'
            mgTop='10'
        />
        )}
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
              editable={false}
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
            RA (Registro do aluno)
          </LoginTitle>
            <TextInput 
                placeholder={'Seu RA'} 
                keyboardType='normal'
                value={raValue}
                onChangeText={(text) => setRaValue(text)}
                  mgTop='5'
                mgLeft='35'
              />

          <Subcontainer mgLeft='0' mgTop='20' dir='row' align='center' justify='center' hgt='100'>
            <RedCancelButton
              bg='everWhite'
              wdt='150'
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
              wdt='150'
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
        
        <PhotoSelectorModal 
          visible={photoModalVisible}
          onClose={() => setPhotoModalVisible(false)}
          onSelect={(photoId) => setSelectedPhotoId(photoId)}
          options={[1, 2, 3, 4, 5]}
        />

      </Container>

    </TouchableWithoutFeedback>
  )
}