import React, { useState } from 'react'
import { TextInputStyle, TimeInputStyle } from './styles'
import contacts from '~/../archives/contacts'
import { useTheme } from '~/context/ThemeContext'
import { theme } from '~/styles'
import { WindowsStyle } from '../Windows/styles'
import { Subcontainer } from '../Container'
import { PageSubTitleStyle } from '../Text/styles'

interface InputProps {
    children?: string
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
    bdRd?: string
    wrap?: string;

    onChangeText?: (text: string) => void
    setList?: (list: any[]) => void
}

export const TextInput = ({ children, value, onChangeText, placeholder, bgColor, color,  wdt, hgt, pddLeft, mgTop, mgLeft, bdRd, wrap }: InputProps) => {

  return (
    <TextInputStyle
      placeholder={placeholder}
      keyboardType={'default'}
      onChangeText={onChangeText}
      wrap={wrap}
      value={value} 
      placeholderTextColor={'gray'}

      mgTop={mgTop}
      mgLeft={mgLeft}
      color={color}
      bgColor={bgColor}
      wdt={wdt}
      hgt={hgt}
      pddLeft={pddLeft}
      bdRd={bdRd}
    />
  )
}

export const ClassInput = () => {
  const { isDark } = useTheme()

  return (
    <WindowsStyle 
      dir='row' 
      hgt='115'
      bg='brisk'
      align='center'
      justify='center'
    >
        <Subcontainer mgTop='-10' mgLeft='0' maxHgt='95' wdt='320' align='center' bg='darkGreen'>
          <PageSubTitleStyle alignSelf='center' mgLeft='0' mgTop='10' color='everWhite' fontSize='18'>Matéria</PageSubTitleStyle>

          <TextInputStyle
            mgTop='5'
            mgLeft='0'
            textAlign='center'
            fontSize='16'
            wdt='290'
          />
            
        </Subcontainer>
    </WindowsStyle>
  )
}


export const TimeInput = () => {
  const { isDark } = useTheme()
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  
  return (
    <WindowsStyle 
      dir='row' 
      hgt='115'
      bg='brisk'
      align='center'
      justify='center'
    >
        <Subcontainer mgTop='0' mgLeft='0' maxHgt='100' wdt='160' align='center' bg='darkGreen'>
          <PageSubTitleStyle alignSelf='center' mgLeft='0' mgTop='10' color='everWhite' fontSize='18'>Início</PageSubTitleStyle>

          <TimeInputStyle 
              type={'custom'}
              options={{
                mask: '99:99'
              }}            
            pddLeft='0' 
            mgTop='5' 
            placeholder='___ : ___'
            placeholderTextColor={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white}
            color={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white} 
            keyboardType={'numeric'}
            onChangeText={setStartTime}
            value={startTime}
            />
        </Subcontainer>

        <Subcontainer mgTop='0' maxHgt='100' wdt='150' align='center' bg='darkGreen' >
          <PageSubTitleStyle alignSelf='center' mgLeft='0' mgTop='10' color='everWhite' fontSize='18'>Fim</PageSubTitleStyle>

          <TimeInputStyle
              type={'custom'}
              options={{
                mask: '99:99'
              }}            
            alignSelf='center' pddLeft='0' 
            mgTop='5' 
            placeholder='___ : ___'
            placeholderTextColor={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white}
            color={isDark ? theme.darkTheme.colors.brisk : theme.darkTheme.colors.white}
            keyboardType={'numeric'}
            onChangeText={setEndTime}
            value={endTime}
          />
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