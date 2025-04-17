import React, { useEffect, useState } from 'react'
import { HeaderContainerStyle } from './styles'
import { HeaderDate } from '~/components/molecules'
import { Photo, HeaderText, LogoHeader, Subcontainer } from '~/components/atoms'
import { useTheme } from '~/context/ThemeContext'
import * as SecureStore from 'expo-secure-store'

const HeaderLogoDark = require('~/../assets/Light_Cromo_LogoBKG.png')
const HeaderLogoLight = require('~/../assets/Dark_Cromo_LogoBKG.png')

export const Headers = () => {
    const { isDark } = useTheme()
    const [user, setUser] = useState<{ nome: string; curso: string; foto: number; email: string } | null>(null);

    useEffect(() => {
        const loadUser = async () => {
          const userData = await SecureStore.getItemAsync('user')
          if (userData) {
            setUser(JSON.parse(userData))
          }
        }
        loadUser()
    }, [])

    if (!user) {
        return <HeaderContainerStyle><HeaderText>Carregando...</HeaderText></HeaderContainerStyle>
      }
    
    return (
        <HeaderContainerStyle>

            <Photo
                idFoto = {user.foto}
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

            <Subcontainer bg='white'
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
        <HeaderContainerStyle justify='flex-end' align='flex-start' bg='transparent'>
            <HeaderContainerStyle 
                mgTop='0' wdt='100' mgLeft='0'
                dir='column' align='center' justify='center'>

            <Subcontainer 
                bg='white'
                wdt='90' hgt='50' mgTop='0' mgLeft='0'
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