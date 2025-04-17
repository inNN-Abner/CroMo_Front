import React from 'react'
import { Grid } from './styles'

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
    pddLeft?: string;
    bdRd?: string
    children?: React.ReactNode
}

export const TableGrid = ({ bg, color, fontSize, txtAlign, fontFamily, wdt, hgt, mgTop, mgLeft, align, pdd, pddLeft, bdRd, children }: GridProps) => {
    return (
        <Grid
            numberOfLines={2}
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