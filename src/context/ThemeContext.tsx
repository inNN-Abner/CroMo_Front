import React, { createContext, useState, useContext, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../styles/theme'

const ThemeToggleContext = createContext({
  toggleTheme: () => {},
  isDark: false,
})

export const useTheme = () => useContext(ThemeToggleContext);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={ isDark ? theme.darkTheme : theme.lightTheme }>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}
