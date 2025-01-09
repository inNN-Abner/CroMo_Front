import React from 'react'
import { HeaderPhoto, HeaderText, LogoHeader } from '~/components/atoms'
import { useTheme } from 'styled-components'
import { HeaderContainerStyle } from './styles'
import { HeaderDate } from '~/components/molecules'
const HarryIcon = require('~/../assets/HarryIcon.png')
const DarkContainer_Logo = require('~/../assets/ContainerDark_CroMo.png')
const LightContainer_Logo = require('~/../assets/ContainerLight_CroMo.png')

interface HeaderProps {
    source?: string
    bg?: string
    wdt?: string
    hgt?: string
    align?: string
    mgTop?: string
}

export const Headers = ({ bg, wdt, hgt, align, mgTop, source }: HeaderProps) => {
    const { isDark } = useTheme()
    
    return (
        <HeaderContainerStyle
        bg={'white'}
        wdt={wdt}
        hgt={hgt}
        >
            <HeaderPhoto
                source={HarryIcon}
                wdt='45'
                hgt='45'    
            />

            <HeaderContainerStyle
                bg={'white'}
                wdt={'235'}
                hgt={'10'}
                dir={'column'}
                align={'flex-end'}
            >
                <HeaderText fontSize='14' fontWgt='bold' mgTop='-25' alignSelf='flex-start'>Henrique Oleiro</HeaderText>
                <HeaderText fontSize='10' mgTop='-10' alignSelf='flex-start'>Logística aeroportuária</HeaderText>
            </HeaderContainerStyle>

            <HeaderContainerStyle 
                wdt='65' hgt='40' mgTop='0'
                dir='column' align='center' justify='center'>

                <LogoHeader
                    source={ isDark ? DarkContainer_Logo : LightContainer_Logo }
                    wdt='50'
                    hgt='15'
                    mgTop='0'
                />
                <HeaderDate mgTop='0'/>
            </HeaderContainerStyle>

        </HeaderContainerStyle>
    )
}