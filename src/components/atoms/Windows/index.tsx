import React from 'react'
import { WindowsStyle } from './styles'
import { ViewProps } from 'react-native'

interface WindowsProps extends ViewProps {
    dir?: string
    bg?: string
    align?: string
    justify?: string
    mgBottom?: string
    mgTop?: string
    mgLeft?: string
    wdt?: string
    hgt?: string
    bdRdBL?: string
    bdRdBR?: string
    bdRdTL?: string
    bdRdTR?: string
    bdRd?: string
    children?: React.ReactNode
}

export const Windows = ({ children, dir, bg, align, justify, mgTop, mgBottom, mgLeft, wdt, hgt, bdRdBL, bdRdBR, bdRdTL, bdRdTR, bdRd }: WindowsProps) => {
    return (
        <WindowsStyle
            dir={dir}
            bg={bg}
            align={align}
            justify={justify}
            mgBottom={mgBottom}
            mgTop={mgTop}
            mgLeft={mgLeft}
            wdt={wdt}
            hgt={hgt}
            bdRdBL={bdRdBL}
            bdRdBR={bdRdBR}
            bdRdTL={bdRdTL}
            bdRdTR={bdRdTR}
            bdRd={bdRd}
            children={children}
        />
    )
}