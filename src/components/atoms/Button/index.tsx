import React from 'react';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '../../../context/ThemeContext';
import { ButtonTextStyle, StyledButtonStyle, ThemeButtonStyle } from './styles';
import { Subcontainer } from '../Container';

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

const ToggleThemeButton = ({ bg, wdt, hgt, mgLeft, bdRd, onPress }: ButtonProps) => {
  const { toggleTheme, isDark } = useTheme();

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