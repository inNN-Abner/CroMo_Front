import React from 'react'
import 'react-native-gesture-handler'
import { Routes } from './src/routes'
import AppLoading from 'expo-app-loading'
import { useColorScheme } from  'react-native'
import { CustomThemeProvider } from './src/context/ThemeContext'
import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function App() {
  
  const deviceTheme = useColorScheme()

  console.log(deviceTheme)

  let [fontsLoaded] = useFonts ({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  })

  if (!fontsLoaded) {
    return<AppLoading />
  }
 
  return (
    <CustomThemeProvider>
      <Routes />
    </CustomThemeProvider>
  )
}
