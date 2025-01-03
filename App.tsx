import React from 'react'
import { SplashScreen } from './src/screens/SplashScreen'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { useColorScheme } from  'react-native'
import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { theme } from './src/styles'

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
    <ThemeProvider theme = { theme }>
      <SplashScreen />
    </ThemeProvider>
  );
}
