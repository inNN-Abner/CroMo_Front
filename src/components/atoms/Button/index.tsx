import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { ButtonTextStyle, StyledButtonStyle } from './styles';

interface ButtonProps {
  source?: string
  bg?: string
  color?: string
  ftSz?: string
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
  onPress?: () => void
}

export const StylezedButton = ({ bg, color, ftSz, align, justify, dir, wdt, hgt, mgTop, mgLeft, mgRight, bdRd, label, onPress }: ButtonProps ) => {
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
                ftSz={ftSz}
                >
                {label}
            </ButtonTextStyle>
    </StyledButtonStyle>
    )
}
const ToggleThemeButton = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Button 
      title={ isDark ? "Modo Claro" : "Modo Escuro" } 
      onPress={toggleTheme} 
    />
  )
}

export default ToggleThemeButton;