import React, { useState } from 'react'
import { TextInputStyle } from './styles'
import contacts from '~/../archives/contacts'
import { useTheme } from '~/context/ThemeContext'
import { theme } from '~/styles'

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

export const SearchInput = ({ placeholder, bgColor, color,  wdt, hgt, mgTop, mgLeft, setList }) => {
  const [searchText, setSearchText] = useState('')
  const { isDark } = useTheme()

  const handleSearch = (text: string) => {
    setSearchText(text)
    if (text === '') {
        setList(contacts)
    } else {
        const filteredList = contacts.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        )
        setList(filteredList)
    }
}

  return (
      <TextInputStyle
        placeholder={placeholder}
        placeholderTextColor={isDark ? theme.darkTheme.colors.white : theme.darkTheme.colors.brisk}
        onChangeText={handleSearch}
        value={searchText}
        keyboardType={'default'}
        mgTop={mgTop}
        mgLeft={mgLeft}
        color={color}
        bgColor={bgColor}
        wdt={wdt}
        hgt={hgt}
      />
  )
}