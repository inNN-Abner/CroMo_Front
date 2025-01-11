import React, { useEffect, useState } from 'react'
import { HeaderDateStyle } from './styles'

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

export const HeaderDate = ({ children, color, fontWgt, fontFamily, fontSize, wdt, mgTop, mgLeft }: TextProps) => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0')
        const month = String(today.getMonth() + 1).padStart(2, '0')
        const year = today.getFullYear()
    
        const formattedDate = `${day}/${month}/${year}`
        setCurrentDate(formattedDate)
    }, []);

    return (
        <HeaderDateStyle
            color = {color}
            fontWgt={fontWgt}
            fontFamily = {fontFamily}
            fontSize = {fontSize}
            wdt = {wdt}
            mgTop = {mgTop}
            mgLeft = {mgLeft}
        >
            {currentDate}
        </HeaderDateStyle>
    )
}
