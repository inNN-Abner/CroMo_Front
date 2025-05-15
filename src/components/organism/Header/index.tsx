import React from 'react'
import { HeaderContainerStyle } from './styles'
import { HeaderDate } from '~/components/molecules'
import { Photo, HeaderText, LogoHeader, Subcontainer } from '~/components/atoms'
import { useTheme } from '~/context/ThemeContext'
import * as SecureStore from 'expo-secure-store'
import { useUser } from '~/services/userContext'
import { imageMapContact } from '~/../archives/photoContacts'

const HeaderLogoDark = require('~/../assets/Light_Cromo_LogoBKG.png')
const HeaderLogoLight = require('~/../assets/Dark_Cromo_LogoBKG.png')

export const Headers = () => {
    const { user } = useUser()
    const { isDark } = useTheme()

    if (!user) {
        return <HeaderContainerStyle><HeaderText>Carregando...</HeaderText></HeaderContainerStyle>
      }

    return (
        <HeaderContainerStyle>

            <Photo
                source = {imageMapContact[user?.idFoto]}
                wdt='45'
                hgt='45'    
            />

            <HeaderContainerStyle
                wdt={'225'}
                hgt={'15'}
                dir={'column'}
            >
                <HeaderText fontSize='14' fontWgt='bold' mgTop='-25' alignSelf='flex-start'>
                    { user.nome || 'Usuário' }
                </HeaderText>
                <HeaderText fontSize='10' mgTop='0' alignSelf='flex-start'>
                    { user.curso || 'Sem curso' }
                </HeaderText>
            </HeaderContainerStyle>

            <Subcontainer 
                bg='white'
                wdt='90' hgt='50' mgTop='0' mgLeft='0' pdd='0'
                dir='column' align='center' justify='center'>

                <LogoHeader
                    source={ isDark ? HeaderLogoDark : HeaderLogoLight }
                    wdt='70'
                    hgt='15'
                    mgTop='5'
                    mgRight='0'
                />
                <HeaderDate />
            </Subcontainer>

        </HeaderContainerStyle>
    )
}

export const PerfilHeaders = () => {
    const { isDark } = useTheme()

    return (
        <HeaderContainerStyle  bg='transparent' justify='flex-end' >
            <HeaderContainerStyle 
                mgTop='0' wdt='100' mgLeft='0'
                dir='column' align='center' justify='center'>

            <Subcontainer 
                bg='white'
                wdt='90' hgt='50' mgTop='0' mgLeft='5'
                dir='column' align='center' justify='center'>

                <LogoHeader
                    source={ isDark ? HeaderLogoDark : HeaderLogoLight }
                    wdt='70'
                    hgt='15'
                    mgTop='5'
                    mgRight='0'
                />
                <HeaderDate />
            </Subcontainer>
            </HeaderContainerStyle>
        </HeaderContainerStyle>
    )
}