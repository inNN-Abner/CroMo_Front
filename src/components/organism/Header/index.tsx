import React from 'react'
import { HeaderContainerStyle } from './styles'
import { HeaderDate } from '~/components/molecules'
import { Photo, HeaderText, LogoHeader } from '~/components/atoms'
import { useTheme } from '~/context/ThemeContext'

const HarryIcon = require('~/../assets/HarryIcon.png')
const HeaderLogoDark = require('~/../assets/Light_Cromo_LogoBKG.png')
const HeaderLogoLight = require('~/../assets/Dark_Cromo_LogoBKG.png')

export const Headers = () => {
    const { isDark } = useTheme()

    return (
        <HeaderContainerStyle>

            <Photo
                source={HarryIcon}
                wdt='45'
                hgt='45'    
            />

            <HeaderContainerStyle
                wdt={'235'}
                hgt={'15'}
                dir={'column'}
            >
                <HeaderText fontSize='14' fontWgt='bold' mgTop='-25' alignSelf='flex-start'>Henrique Oleiro</HeaderText>
                <HeaderText fontSize='10' mgTop='0' alignSelf='flex-start'>Logística aeroportuária</HeaderText>
            </HeaderContainerStyle>

            <HeaderContainerStyle 
                wdt='65' hgt='40' mgTop='0'
                dir='column' align='center' justify='center'>

                <LogoHeader
                    source={ isDark ? HeaderLogoDark : HeaderLogoLight }
                    wdt='70'
                    hgt='15'
                    mgTop='5'
                />
                <HeaderDate />
            </HeaderContainerStyle>

        </HeaderContainerStyle>
    )
}

export const PerfilHeaders = () => {
    const { isDark } = useTheme()

    return (
        <HeaderContainerStyle justify='flex-end' bg='transparent' >

            <HeaderContainerStyle 
                wdt='100' hgt='50' mgTop='0'
                dir='column' align='center' justify='center'>

                <LogoHeader
                    source={ isDark ? HeaderLogoDark : HeaderLogoLight }
                    wdt='70'
                    hgt='15'
                    mgTop='5'
                    mgLeft='13'
                />

                <HeaderDate mgLeft='53'/>
            </HeaderContainerStyle>

        </HeaderContainerStyle>
    )
}