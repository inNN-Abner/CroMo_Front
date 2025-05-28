import React from 'react'
import { Grid } from './styles'
import { ButtonTextStyle } from '~/components/atoms/Button/styles'
import { Fontisto } from '@expo/vector-icons'
import { useTheme } from '~/context/ThemeContext'

interface GridProps {
    bg?: string
    color?: string
    fontSize?: string
    txtAlign?: string
    fontFamily?: string
    wdt?: string
    hgt?: string
    mgTop?: string
    mgLeft?: string
    align?: string
    pdd?: string
    pddLeft?: string
    bdRd?: string
    children?: React.ReactNode
    numberLines?: number

    hour?: string
    local?: string
}


export const TableGrid = ({ bg, color, fontSize, txtAlign, fontFamily, wdt, hgt, mgTop, mgLeft, align, pdd, pddLeft, bdRd, children, numberLines }: GridProps) => {
    return (
        <Grid
            numberOfLines={numberLines}
            ellipsizeMode="tail"      
            color={color}
            bg={bg}
            wdt={wdt}
            hgt={hgt}
            fontFamily={fontFamily}
            fontSize={fontSize}
            mgTop={mgTop}
            mgLeft={mgLeft}
            align={align}
            pdd={pdd}
            pddLeft={pddLeft}
            txtAlign={txtAlign}
            bdRd={bdRd}
        >
            {children}
        </Grid>
    )
}

export const IconTableGrid = ({ bg, color, fontSize, txtAlign, fontFamily, wdt, hgt, mgTop, mgLeft, align, pdd, pddLeft, bdRd, numberLines, hour, local }: GridProps) => {
    const { isDark } = useTheme()
    return (
        <Grid
            numberOfLines={numberLines}
            ellipsizeMode="tail"      
            color={color}
            bg={bg}
            wdt={wdt}
            hgt={hgt}
            fontFamily={fontFamily}
            fontSize={fontSize}
            mgTop={mgTop}
            mgLeft={mgLeft}
            align={align}
            pdd={pdd}
            pddLeft={pddLeft}
            txtAlign={txtAlign}
            bdRd={bdRd}
        >
        <ButtonTextStyle
            color={color}
            fontSize={fontSize}
          > 
            <Fontisto name="map-marker-alt" size={15} color={isDark ? '#333333' : '#ffffff'} />
            {local}
        </ButtonTextStyle>
        
        <ButtonTextStyle
            color={color}
            fontSize={fontSize}
          >
            <Fontisto name="clock" size={15} color={isDark ? '#333333' : '#ffffff'} />
            {hour}
        </ButtonTextStyle>
    </Grid>
    )
}