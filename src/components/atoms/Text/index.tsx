import React from 'react'
import { PageTitleStyle, PageSubTitleStyle, LoginTitleStyle, HeaderTextStyle, CardTextStyle, ButtonTextStyle } from './styles'

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

export const CardText = ({ children, color, fontFamily, fontSize }: TextProps) => {
    return (
        <CardTextStyle
            color = {color}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
        >
            {children}
        </CardTextStyle>
    )
}

export const ButtonText = ({ children, color, fontFamily, fontSize}: TextProps) => {
    return (
        <ButtonTextStyle
            color = {color}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
        >
            {children}
        </ButtonTextStyle>
    )
}