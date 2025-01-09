import { HeaderPhotoStyle } from './styles'

interface PhotoProps{
    source?: string
    wdt?: string
    hgt?: string
    mgTop?: string
    mgLeft?: string
    bdRd?: string
}

export const HeaderPhoto = ({ source, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
    return (
        <HeaderPhotoStyle 
        source={source}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bdRd={bdRd}
        />
    )
}