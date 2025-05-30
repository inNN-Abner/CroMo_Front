import { LogoImageStyle, LogoHeaderStyle, IconButtonStyle } from './styles'
const ChatbotIcon = require('~/../assets/Chatbot_CroMo.png')

interface LogoProps {
    source?: string
    justify?: string
    wdt?: string
    hgt?: string
    mgTop?: string
    mgRight?: string
    mgLeft?: string
    bdRd?: string
}

export const LogoImage = ({ source, justify, wdt, hgt, mgTop, mgRight, mgLeft }: LogoProps) => {
    return (
        <LogoImageStyle
            source={source}
            justify={justify}
            wdt={wdt}
            hgt={hgt}
            mgTop={mgTop}
            mgRight={mgRight}
            mgLeft={mgLeft}
        />
    )
}

export const LogoHeader = ({ source, justify, wdt, hgt, mgTop, mgRight, mgLeft }: LogoProps) => {
    return (
        <LogoHeaderStyle
            source={source}
            justify={justify}
            wdt={wdt}
            hgt={hgt}
            mgTop={mgTop}
            mgRight={mgRight}
            mgLeft={mgLeft}
        />
    )
}

export const IconButton = ({ source, justify, wdt, hgt, mgTop, mgRight, mgLeft }: LogoProps) => {
    return (
    <IconButtonStyle
            source={ChatbotIcon}
            justify={justify}
            wdt={wdt}
            hgt={hgt}
            mgTop={mgTop}
            mgRight={mgRight}
            mgLeft={mgLeft}
        />
    )
}