import React from 'react'
import { PhotoStyle } from './styles'

interface PhotoProps {
    idFoto?: number
    materiaFoto?: string
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
    3: require('~/../assets/Transfiguration.jpg'),
    4: require('~/../assets/Helmet.png'),
    5: require('~/../assets/TechnologySociety.png'),
    6: require('~/../assets/Book.png'),
}

export const Photo = ({ source, idFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
return (
    <PhotoStyle 
        source={source || imageMap[idFoto || 1]}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bdRd={bdRd}
    />
)}

export const ClassIcon = ({ materiaFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
return (
    <PhotoStyle 
        source={imageMap[materiaFoto || 1]}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bdRd={bdRd}
    />
)}

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
)}

export const PhotoModal = ({ idFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
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
