import React from 'react'
import 'react-native-gesture-handler'
import { Routes } from './src/routes'
import { useColorScheme, ActivityIndicator, View, StatusBar } from 'react-native'
import { theme } from '~/styles/theme'
import { useFonts, Quicksand_400Regular, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand'
import { UserProvider } from '~/services/userContext'
import { LogBox } from 'react-native'
import { CustomThemeProvider } from '~/context/ThemeContext'

LogBox.ignoreLogs([
  'Warning: DatePicker: Support for defaultProps',
  'Warning: Header: Support for defaultProps',
])

export default function App() {
  const deviceTheme = useColorScheme()

  console.log(deviceTheme)

  let [fontsLoaded] = useFonts ({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
 
  return (
    <CustomThemeProvider>
      <UserProvider>
        <StatusBar 
          barStyle={deviceTheme ? 'dark-content' : 'light-content'}
          backgroundColor="transparent" 
          translucent 
        />
        <Routes />
      </UserProvider>
    </CustomThemeProvider>
  )
}
