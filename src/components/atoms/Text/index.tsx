import React from 'react'
import { PageTitleStyle, PageSubTitleStyle, LoginTitleStyle, HeaderTextStyle, ContactNameStyle, InfoTextStyle, ButtonTextStyle } from './styles'
import { ViewProps } from 'react-native'

interface TextProps extends ViewProps{
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
    txtAlign?: string
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

export const LoginError = ({ children, color, fontFamily, fontSize, mgLeft, mgTop, alignSelf }: TextProps) => {
    return (
        <LoginTitleStyle
            numberOfLines={1}
            ellipsizeMode="tail"
            color = {color}
            mgTop = {mgTop}
            mgLeft = {mgLeft}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            alignSelf = {alignSelf}
            pddLeft='0'
        >
            {children}
        </LoginTitleStyle>
    )
}


export const HeaderText = ({ children, color, fontWgt, fontFamily, fontSize, alignSelf, wdt, mgTop, mgLeft }: TextProps) => {
    return (
        <HeaderTextStyle
            numberOfLines={1}
            ellipsizeMode="tail"
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
            numberOfLines={1}
            ellipsizeMode="tail"
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
            numberOfLines={1}
            ellipsizeMode="tail"
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

export const InfoTextNoWrap = ({ alignSelf, children, color, fontWgt, fontFamily, fontSize, mgTop, mgBottom, mgLeft, mgRight }: TextProps) => {
    return (
        <InfoTextStyle
            ellipsizeMode="tail"
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


export const ModalText = ({ alignSelf, children, color, fontWgt, fontFamily, fontSize, mgTop, mgBottom, mgLeft, mgRight }: TextProps) => {
    return (
        <InfoTextStyle
            numberOfLines={2}
            ellipsizeMode="tail"
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