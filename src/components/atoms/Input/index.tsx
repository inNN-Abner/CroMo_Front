import React, { useState } from 'react'
import { TextInputStyle, TimeInputStyle } from './styles'
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
    editable?: boolean
  
    bgColor?: string
    color?: string
    alignSelf?: string
    wdt?: string
    hgt?: string
    pddLeft?: string
    mgTop?: string
    mgLeft?: string
    bdRd?: string
    wrap?: string
    fontSize?: string
    align?: string
    placeColor?: string

    onChangeText?: (text: string) => void
    setList?: (list: any[]) => void
}

export const TextInput = ({ children, editable, value, fontSize, align, secureTextEntry, onChangeText, placeholder, placeColor, bgColor, color,  wdt, hgt, pddLeft, mgTop, mgLeft, bdRd, wrap }: InputProps) => {

  return (
    <TextInputStyle
      placeholder={placeholder}
      placeholderTextColor={placeColor}
      keyboardType={'default'}
      onChangeText={onChangeText}
      wrap={wrap}
      value={value} 
      editable={editable} 
      fontSize={fontSize}
      align={align}
      multiline={true}

      mgTop={mgTop}
      mgLeft={mgLeft}
      color={color}
      bgColor={bgColor}
      wdt={wdt}
      hgt={hgt}
      pddLeft={pddLeft}
      bdRd={bdRd}
      secureTextEntry={secureTextEntry}
    />
  )
}

type ClassInputProps = {
  value: string
  setMateria: (value: string) => void
}

export const ClassInput: React.FC<ClassInputProps> = ({ value, setMateria }) => {
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

          <TextInput
            mgTop='5'
            mgLeft='0'
            wdt='290'
            align='center'
            pddLeft='0'
            fontSize='16'
            placeholder='Ex.: Gestão de projetos'
            value={value}
            onChangeText={setMateria}
          />
            
        </Subcontainer>
    </WindowsStyle>
  )
}


type TimeInputProps = {
  startTime: string
  setStartTime: (value: string) => void
  endTime: string
  setEndTime: (value: string) => void
}

export const TimeInput: React.FC<TimeInputProps> = ({ startTime, setStartTime, endTime, setEndTime }) => {
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
        <PageSubTitleStyle alignSelf='center' mgLeft='0' mgTop='10' color='everWhite' fontSize='18'>
          Início
        </PageSubTitleStyle>

        <TimeInputStyle 
          type={'custom'}
          options={{ mask: '99:99' }}
          pddLeft='0' 
          mgTop='5' 
          placeholder='___ : ___'
          placeholderTextColor={isDark ? theme.darkTheme.colors.white : theme.lightTheme.colors.brisk}
          color={isDark ? theme.darkTheme.colors.white : theme.lightTheme.colors.brisk} 
          keyboardType={'numeric'}
          onChangeText={setStartTime}
          value={startTime}
        />
      </Subcontainer>

      <Subcontainer mgTop='0' maxHgt='100' wdt='150' align='center' bg='darkGreen'>
        <PageSubTitleStyle alignSelf='center' mgLeft='0' mgTop='10' color='everWhite' fontSize='18'>
          Fim
        </PageSubTitleStyle>

        <TimeInputStyle 
          type={'custom'}
          options={{ mask: '99:99' }}
          alignSelf='center' 
          pddLeft='0' 
          mgTop='5' 
          placeholder='___ : ___'
          placeholderTextColor={isDark ? theme.darkTheme.colors.white : theme.lightTheme.colors.brisk}
          color={isDark ? theme.darkTheme.colors.white : theme.lightTheme.colors.brisk} 
          keyboardType={'numeric'}
          onChangeText={setEndTime}
          value={endTime}
        />
      </Subcontainer>
    </WindowsStyle>
  )
}

export const SearchInput = ({ placeholder, bgColor, color,  wdt, hgt, mgTop, mgLeft, setList, originalList }) => {
  const [searchText, setSearchText] = useState('')
  const { isDark } = useTheme()

  const handleSearch = (text: string) => {
    setSearchText(text)

    const regex = new RegExp(text, 'i')

    const filteredList = originalList.filter(item => {
      const name = item.name || item.nome
      return name ? regex.test(name) : false
    })

    setList(text === '' ? originalList : filteredList)
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