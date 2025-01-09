import React, { useState } from 'react'
import { TextInputStyle } from './styles'

interface InputProps {
    value?: string
    placeholder: string
    keyboardType?: string
    secureTextEntry?: boolean
    
    bgColor?: string; 
    color?: string;
    wdt?: string; 
    hgt?: string; 
    pddLeft?: string; 
    mgTop?: string; 
    mgLeft?: string

    onChangeText?: (text: string) => void
    setList?: (list: any[]) => void;
}

export const TextInput = ({ placeholder, bgColor, color,  wdt, hgt, pddLeft, mgTop, mgLeft }: InputProps) => {
  const [text, onChangeText] = useState('')

  return (
      <TextInputStyle
        placeholder={placeholder}
        keyboardType={'default'}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'} 

        mgTop={mgTop}
        mgLeft={mgLeft}
        color={color}
        bgColor={bgColor}
        wdt={wdt}
        hgt={hgt}
        pddLeft={pddLeft}
      />
  )
}