import { PhotoStyle } from './styles'

interface PhotoProps{
    source?: string
    wdt?: string
    hgt?: string
    mgTop?: string
    mgLeft?: string
    bdRd?: string
}

export const Photo = ({ source, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
    return (
        <PhotoStyle 
        source={source}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bdRd={bdRd}
        />
    )
}
