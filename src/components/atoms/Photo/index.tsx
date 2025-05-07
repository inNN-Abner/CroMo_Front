import React from 'react'
import { PhotoStyle } from './styles'
import { imageMap, defaultPhoto } from '~/../archives/photoMapper'
import { imageMapContact, defaultPhotoContact } from '~/../archives/photoContacts'

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
        source={source || imageMap[idFoto || defaultPhoto]}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bdRd={bdRd}
    />
)}

export const ClassIcon = ({ source, materiaFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
return (
    <PhotoStyle 
        source={source || imageMap[materiaFoto || defaultPhoto]}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bdRd={bdRd}
    />
)}

export const EditPhoto = ({ source, idFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
return (
    <PhotoStyle 
        source={source || imageMapContact[idFoto || defaultPhotoContact]}
        wdt={wdt}
        hgt={hgt}
        mgTop={mgTop}
        mgLeft={mgLeft}
        bdRd={bdRd}
    />
)}

export const PhotoModal = ({ source, idFoto, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
    return (
        <PhotoStyle 
            source={source || imageMapContact[idFoto || defaultPhotoContact]}
            wdt={wdt}
            hgt={hgt}
            mgTop={mgTop}
            mgLeft={mgLeft}
            bdRd={bdRd}
        />
    )    
}
