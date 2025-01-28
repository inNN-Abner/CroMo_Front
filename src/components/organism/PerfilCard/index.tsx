import React from 'react';
import perfil from '~/../archives/perfil'
import { Windows, Subcontainer, Photo, ContactText, InfoText  } from '~/components'

export const PerfilCard = ({ navigation }) => {
    
    return (
        <Windows
            hgt='155'
            wdt='355'
            align='center'
            mgTop='10'
            >
            <Photo
                source={perfil.photo}
                hgt='125'
                wdt='80'
                bdRd='20'
            />
            
            <Subcontainer mgLeft='5' mgTop='0' hgt='125' wdt='250' align='left' justify='center' bg='white'>

                <ContactText color='whiteGreen' fontSize='12' mgTop='-5'>Nome do professor(a):</ContactText>
                <InfoText color='whiteGreen' children={perfil.name} fontWgt='normal' mgTop='-3' ></InfoText>

                <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Teams:</ContactText>
                <InfoText color='whiteGreen' children={perfil.teams} fontWgt='normal' mgTop='-3' ></InfoText>

                <ContactText color='whiteGreen' fontSize='12' mgTop='5'>E-mail:</ContactText>
                <InfoText color='whiteGreen' children={perfil.email} fontWgt='normal' mgTop='-3' ></InfoText>

                <ContactText color='whiteGreen' fontSize='12' mgTop='5'>Curso:</ContactText>
                <InfoText color='whiteGreen' children={perfil.course} fontWgt='normal' mgTop='-3' ></InfoText>

            </Subcontainer>
        </Windows>
    )
}