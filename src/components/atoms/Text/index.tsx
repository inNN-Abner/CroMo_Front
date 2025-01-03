import React from 'react'
import { PageTitleStyle, PageSubTitleStyle, CardTextStyle, ButtonTextStyle } from './styles'

interface TextProps {
    children?: string
    color?: string
    fontFamily?: string
    fontSize?: string
}

export const PageTitle = ({ children, color, fontFamily, fontSize}: TextProps) => {
    return (
        <PageTitleStyle
            color = {color}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
        >
            {children}
        </PageTitleStyle>
    )
}

export const PageSubtitle = ({ children, color, fontFamily, fontSize}: TextProps) => {
    return (
        <PageSubTitleStyle
            color = {color}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
        >
            {children}
        </PageSubTitleStyle>
    )
}

export const CardText = ({ children, color, fontFamily, fontSize}: TextProps) => {
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