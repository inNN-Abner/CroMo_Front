import React, { useEffect, useState } from 'react'
import perfil from '~/../archives/perfil'
import { Windows, Subcontainer, Photo, ContactText, InfoText  } from '~/components'
import * as SecureStore from 'expo-secure-store'
import { PixelRatio } from 'react-native'


export const PerfilCard = ({ navigation }) => {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [teamsValue, setTeamsValue] = useState('')
  const [userData, setUserData] = useState<{ nome: string; foto: number; curso: string } | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const fontScale = PixelRatio.getFontScale()
  const cardHeight = fontScale > 1.1 ? '185' : '155'

  useEffect(() => {
    const loadUser = async () => {
    const userData = await SecureStore.getItemAsync('user')

    if (userData) {
      const data = JSON.parse(userData)
      setUserData(data)
      setNameValue(data.nome || '')
      setEmailValue(data.email || '')
      setTeamsValue(data.teams || '')
      setSelectedCourse(data.curso || 'Clique para selecionar')
    }
  }
    loadUser()
  }, [])
      if (!userData) {
        return <InfoText>Carregando...</InfoText>
      }
    
    return (
      <Windows
        hgt={cardHeight}
        wdt='355'
        align='center'
        mgTop='0'
        >
        <Photo
          idFoto = {userData.foto}
          hgt='125'
          wdt='80'
          bdRd='20'
        />
        
        <Subcontainer mgLeft='5' mgTop='0' hgt='125' wdt='250' align='left' justify='center' bg='white'>

          <ContactText color='whiteGreen' fontSize='12' mgTop='-5'>Meu nome:</ContactText>
          <InfoText color='whiteGreen' children={nameValue} fontWgt='normal' mgTop='-3' ></InfoText>

          <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Teams:</ContactText>
          <InfoText color='whiteGreen' children={teamsValue || 'Contato não informado'} fontWgt='normal' mgTop='-3' ></InfoText>

          <ContactText color='whiteGreen' fontSize='12' mgTop='5'>E-mail:</ContactText>
          <InfoText color='whiteGreen' children={emailValue} fontWgt='normal' mgTop='-3' ></InfoText>

          <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Curso:</ContactText>
          <InfoText color='whiteGreen' children={selectedCourse} fontWgt='normal' mgTop='-3' ></InfoText>

        </Subcontainer>
      </Windows>
    )
}