import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';

const ToggleThemeButton = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Button 
      title={isDark ? "Modo Claro" : "Modo Escuro"} 
      onPress={toggleTheme} 
    />
  )
}

export default ToggleThemeButton;
