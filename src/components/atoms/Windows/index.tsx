import React from 'react'
import { WindowsStyle } from './styles'

interface WindowsProps {
    dir?: string;
    bg?: string;
    align?: string;
    justify?: string;
    mgTop?: string;
    mgLeft?: string;
    wdt?: string;
    hgt?: string;
    bdRdBL?: string;
    bdRdBR?: string;
    bdRdTL?: string;
    bdRdTR?: string;
    bdRd?: string
    children?: React.ReactNode
}

export const Windows = ({ children, dir, bg, align, justify, mgTop, mgLeft, wdt, hgt, bdRdBL, bdRdBR, bdRdTL, bdRdTR, bdRd }: WindowsProps) => {
    return (
        <WindowsStyle
        dir={dir}
        bg={bg}
        align={align}
        justify={justify}
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