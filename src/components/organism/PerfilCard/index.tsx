import React from 'react'
import { Windows, Subcontainer, Photo, ContactText, InfoText  } from '~/components'
import * as SecureStore from 'expo-secure-store'
import { PixelRatio } from 'react-native'
import { useUser } from '~/services/userContext'
import { imageMapContact } from '~/../archives/photoContacts'


export const PerfilCard = ({ navigation }) => {
  const { user } = useUser()
    if (!user) {
      return <InfoText>Carregando...</InfoText>
    }

  const fontScale = PixelRatio.getFontScale()
  const cardHeight = fontScale > 1.0 ? '185' : '165'

  return (
    <Windows
      hgt={cardHeight}
      wdt='355'
      align='center'
      mgTop='0'
      >
      <Photo
        source = {imageMapContact[user?.idFoto]}
        hgt='135'
        wdt='80'
        bdRd='20'
      />
      
      <Subcontainer mgLeft='5' mgTop='0' hgt='125' wdt='250' align='left' justify='center' bg='white'>

        <ContactText color='whiteGreen' fontSize='12' mgTop='-5'>Meu nome:</ContactText>
        <InfoText color='whiteGreen' children={user.nome} fontWgt='normal' mgTop='-3' ></InfoText>

        <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Teams:</ContactText>
        <InfoText color='whiteGreen' children={user.teams || 'Contato não informado'} fontWgt='normal' mgTop='-3' ></InfoText>

        <ContactText color='whiteGreen' fontSize='12' mgTop='5'>E-mail:</ContactText>
        <InfoText color='whiteGreen' children={user.email} fontWgt='normal' mgTop='-3' ></InfoText>

        <ContactText color='whiteGreen' fontSize='12' mgTop='5'>RA (Registro do Aluno):</ContactText>
        <InfoText color='whiteGreen' children={user.ra} fontWgt='normal' mgTop='-3' ></InfoText>

        <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Curso:</ContactText>
        <InfoText color='whiteGreen' children={user.curso} fontWgt='normal' mgTop='-3' ></InfoText>

      </Subcontainer>
    </Windows>
  )
}