import { PhotoStyle } from './styles'

interface PhotoProps{
    idFoto?: number
    source?: string
    wdt?: string
    hgt?: string
    mgTop?: string
    mgLeft?: string
    bdRd?: string
}

export const imageMap: Record<number, any> = {
    1: require('~/../assets/Bag.png'),
    2: require('~/../assets/Book.png'),
    3: require('~/../assets/Helmet.png'),
}

export const Photo = ({ idFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
    return (
        <PhotoStyle 
            source={imageMap[idFoto || 1]}
            wdt={wdt}
            hgt={hgt}
            mgTop={mgTop}
            mgLeft={mgLeft}
            bdRd={bdRd}
        />
    )
}

export const EditPhoto = ({ idFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
    return (
        <PhotoStyle 
            source={imageMap[idFoto || 1]}
            wdt={wdt}
            hgt={hgt}
            mgTop={mgTop}
            mgLeft={mgLeft}
            bdRd={bdRd}
        />
    )
}