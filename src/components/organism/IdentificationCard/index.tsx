import React from 'react'
import { Windows, Subcontainer, Photo, ContactText, InfoText  } from '../../../components'
import { PixelRatio } from 'react-native'
import { defaultPhotoContact, imageMapContact } from '~/../archives/photoContacts'

export const IdentificationCard = ({ route }) => {
    const { nome, idFoto, tipo, email, teams } = route.params
    const fontScale = PixelRatio.getFontScale()
    const cardHeight = fontScale > 1.1 ? '185' : '155'
        
    return (
        <Windows
            hgt={cardHeight}
            wdt='335'
            align='center'
            mgTop='0'
            >
            <Photo
                source={imageMapContact[idFoto] ?? defaultPhotoContact}
                hgt='125'
                wdt='80'
                bdRd='20'
                />
            
            <Subcontainer mgLeft='5' mgTop='0' hgt='125' wdt='230' align='left' justify='center' bg='white'>

                <ContactText color='whiteGreen' fontSize='12' mgTop='-5'>Nome do professor(a):</ContactText>
                <InfoText color='whiteGreen' children={nome} fontWgt='normal' mgTop='-3' ></InfoText>

                <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Teams:</ContactText>
                <InfoText color='whiteGreen' children={teams || 'N/A'} fontWgt='normal' mgTop='-3' ></InfoText>

                <ContactText color='whiteGreen' fontSize='12' mgTop='5'>E-mail:</ContactText>
                <InfoText color='whiteGreen' children={email || 'N/A'} fontWgt='normal' mgTop='-3' ></InfoText>

                <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Tipo:</ContactText>
                <InfoText color='whiteGreen' children={tipo || 'N/A'} fontWgt='normal' mgTop='-3' ></InfoText>

            </Subcontainer>
        </Windows>
    )
}