import React from 'react'
import { PageTitleStyle, PageSubTitleStyle, LoginTitleStyle, HeaderTextStyle, ContactNameStyle, InfoTextStyle, ButtonTextStyle } from './styles'

interface TextProps {
    children?: string
    color?: string
    fontWgt?: string
    fontFamily?: string
    fontSize?: string
    alignSelf?: string
    wdt?: string
    mgTop?: string
    mgBottom?: string
    mgLeft?: string
    mgRight?: string
    pddLeft?: string
}

export const PageTitle = ({ children, color, fontFamily, fontSize, mgTop, mgBottom, mgLeft }: TextProps) => {
    return (
        <PageTitleStyle
            color = {color}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            mgTop = {mgTop}
            mgBottom = {mgBottom}
            mgLeft = {mgLeft}
        >
            {children}
        </PageTitleStyle>
    )
}

export const PageSubtitle = ({ children, color, fontFamily, fontSize, alignSelf, mgTop, mgBottom, mgLeft, pddLeft }: TextProps) => {
    return (
        <PageSubTitleStyle
            color = {color}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            alignSelf = {alignSelf}
            mgTop = {mgTop}
            mgBottom = {mgBottom}
            mgLeft = {mgLeft}
            pddLeft = {pddLeft}
        >
            {children}
        </PageSubTitleStyle>
    )
}

export const LoginTitle = ({ children, color, fontFamily, fontSize, alignSelf, mgTop, mgBottom, mgLeft, pddLeft }: TextProps) => {
    return (
        <LoginTitleStyle
            color = {color}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            alignSelf = {alignSelf}
            mgTop = {mgTop}
            mgBottom = {mgBottom}
            mgLeft = {mgLeft}
            pddLeft = {pddLeft}
        >
            {children}
        </LoginTitleStyle>
    )
}

export const LoginError = ({ children, color, fontFamily, fontSize, mgTop }: TextProps) => {
    return (
        <LoginTitleStyle
            color = {color}
            mgTop = {mgTop}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
        >
            {children}
        </LoginTitleStyle>
    )
}


export const HeaderText = ({ children, color, fontWgt, fontFamily, fontSize, alignSelf, wdt, mgTop, mgLeft }: TextProps) => {
    return (
        <HeaderTextStyle
            color = {color}
            fontWgt={fontWgt}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            alignSelf = {alignSelf}
            wdt = {wdt}
            mgTop = {mgTop}
            mgLeft = {mgLeft}
        >
            {children}
        </HeaderTextStyle>
    )
}

export const ContactText = ({ children, color, fontWgt, fontFamily, fontSize, mgTop, mgLeft }: TextProps) => {
    return (
        <ContactNameStyle
            color = {color}
            fontWgt={fontWgt}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            mgTop = {mgTop}
            mgLeft = {mgLeft}
        >
            {children}
        </ContactNameStyle>
    )
}

export const InfoText = ({ alignSelf, children, color, fontWgt, fontFamily, fontSize, mgTop, mgBottom, mgLeft, mgRight }: TextProps) => {
    return (
        <InfoTextStyle
            alignSelf = {alignSelf}
            color = {color}
            fontWgt={fontWgt}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            mgTop = {mgTop}
            mgBottom={mgBottom}
            mgLeft = {mgLeft}
            mgRight={mgRight}
        >
            {children}
        </InfoTextStyle>
    )
}