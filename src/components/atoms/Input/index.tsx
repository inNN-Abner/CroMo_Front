import React, { useState } from 'react'
import { TextInputStyle, TimeInputStyle } from './styles'
import contacts from '~/../archives/contacts'
import { useTheme } from '~/context/ThemeContext'
import { theme } from '~/styles'
import { WindowsStyle } from '../Windows/styles'
import { Subcontainer } from '../Container'
import { PageSubTitleStyle } from '../Text/styles'

interface InputProps {
    value?: string
    placeholder: string
    keyboardType?: string
    secureTextEntry?: boolean
  
    bgColor?: string
    color?: string
    alignSelf?: string
    wdt?: string
    hgt?: string
    pddLeft?: string
    mgTop?: string
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

export const TimeInput = () => {
  const { isDark } = useTheme()

  return (
    <WindowsStyle 
      dir='row' 
      hgt='115'
      bg='brisk'
      align='center'
      justify='center'
    >
        <Subcontainer mgTop='0' mgLeft='0' maxHgt='100' wdt='160' align='center' bg='darkGreen'>
          <PageSubTitleStyle alignSelf='center' mgLeft='0' color='everWhite' fontSize='18'>Início</PageSubTitleStyle>
          <TimeInputStyle pddLeft='0' mgTop='5' 
            placeholder='___ : ___' placeholderTextColor={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white}
            color={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white} />
        </Subcontainer>

        <Subcontainer mgTop='0' maxHgt='100' wdt='150' align='center' bg='darkGreen' >
          <PageSubTitleStyle alignSelf='center' mgLeft='0' color='everWhite' fontSize='18'>Fim</PageSubTitleStyle>
          <TimeInputStyle alignSelf='center' pddLeft='0' mgTop='5' 
            placeholder='___ : ___' placeholderTextColor={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white}
            color={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white} />
        </Subcontainer>
    </WindowsStyle>
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