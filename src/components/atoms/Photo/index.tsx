import React from 'react'
import { PhotoStyle } from './styles'
import { imageMap, defaultPhoto } from '~/../archives/photoMapper'

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
