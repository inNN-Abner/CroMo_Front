import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Fontisto from '@expo/vector-icons/Fontisto'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useTheme } from '../../../context/ThemeContext';
import { ButtonTextStyle, StyledButtonStyle, ThemeButtonStyle } from './styles';
import { Subcontainer } from '../Container';

interface ButtonProps {
  source?: string
  bg?: string
  color?: string
  fontSize?: string
  align?: string
  justify?: string
  dir?: string
  wdt?: string
  hgt?: string
  mgTop?: string
  mgLeft?: string
  mgRight?: string
  bdRd?: string
  children?: React.ReactNode
  label?: string
  hour?: string
  classRoom?: string
  onPress?: () => void
}

export const StylezedButton = ({ bg, color, fontSize, wdt, hgt, mgTop, mgLeft, mgRight, bdRd, label, onPress }: ButtonProps ) => {
    return (
    <StyledButtonStyle
        bg={bg}
        mgTop={mgTop}
        mgLeft={mgLeft}
        mgRight={mgRight}
        hgt={hgt}
        wdt={wdt}
        bdRd={bdRd}
        onPress={onPress}
        >
            <ButtonTextStyle
                color={color}
                fontSize={fontSize}
                >
                  {label}
            </ButtonTextStyle>
    </StyledButtonStyle>
    )
}

const ToggleThemeButton = ({ bg, wdt, hgt, mgLeft, bdRd }: ButtonProps) => {
  const { toggleTheme, isDark } = useTheme()

  return (
    <ThemeButtonStyle
      bg={bg}
      mgLeft={mgLeft}
      hgt={hgt}
      wdt={wdt}
      bdRd={bdRd}
      onPress={toggleTheme}
    >
      <Subcontainer mgLeft='0' mgTop='0' bg='transparent' align='center' justify='center'>
        <Ionicons name={ isDark ? 'moon' : 'sunny'} size={40} color={ isDark ? 'white' : 'white'}  />
      </Subcontainer>
    </ThemeButtonStyle>
  )
}

export default ToggleThemeButton;

export const AddButton = ({ bg, wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <Ionicons name="add-circle" size={24} color={'white'} />
    </StyledButtonStyle>
  )
}

export const DayButton = ({ hgt, label, color, bg, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle 
        bg={bg}
        bdRd={'5'}
        wdt={'50'}
        hgt={hgt}
        mgTop={'0'}
        onPress={onPress}>
            <ButtonTextStyle
                color={color}
                >
                  {label}
            </ButtonTextStyle>
    </StyledButtonStyle>
  )
}

export const SetTimeButton = ({ bdRd, hgt, wdt, color, bg, mgTop, mgLeft, fontSize, onPress, hour }: ButtonProps ) => {
  return (
  <StyledButtonStyle 
      bg={bg}
      mgTop={mgTop}
      mgLeft={mgLeft}
      hgt={hgt}
      wdt={wdt}
      bdRd={bdRd}
      onPress={onPress}
      >
        <ButtonTextStyle
            color={color}
            fontSize={fontSize}
          >
            {hour}
        </ButtonTextStyle>
  </StyledButtonStyle>
  )
}

export const EditButton  = ({ wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={'everWhite'}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <FontAwesome name="pencil" size={24} color={'black'} />
    </StyledButtonStyle>
  )
}

export const TrashButton = ({ bg, wdt, hgt, bdRd, mgTop, mgLeft, onPress }: ButtonProps ) => {
  return (
    <StyledButtonStyle
        bg={bg}
        wdt={wdt}
        hgt={hgt}
        bdRd={bdRd}
        mgLeft={mgLeft}
        mgTop={mgTop}
        onPress={onPress}>
        <Fontisto name="trash" size={24} color="white" />
    </StyledButtonStyle>
  )
}

