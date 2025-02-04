import { useState } from 'react';
import { PhotoStyle } from './styles'
import { launchImageLibrary } from 'react-native-image-picker';
import perfil from '../../../../archives/perfil';

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

export const EditPhoto = ({ source, wdt, hgt, mgTop, mgLeft, bdRd }: PhotoProps) => {
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