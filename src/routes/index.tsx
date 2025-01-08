import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, SplashScreen } from '../screens'

/*
interface BottomRoutes{
    Main: string
    Appointments: string
    Contacts: string
    Perfil: string
}

const routeIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Main: 'home',
    Appointments: 'calendar',
    Contacts: 'id-card',
    Perfil: 'person'
}


const BottomRoute = () => {
    const Tab = createBottomTabNavigator()
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true)
        })
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false)
        })

        return () => {
            keyboardDidHideListener.remove()
            keyboardDidShowListener.remove()
        }
    }, [])
    
    return (
        <Tab.Navigator  
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const iconName = routeIcons[route.name as keyof BottomRoutes]
                    return <Ionicons name={iconName} size={theme.metrics.px(34)} color={focused ? 'red' : theme.colors.darkRed}/>
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: isKeyboardVisible ? 'none' : 'flex',
                },
            })}>
            <Tab.Screen name='Main' component={HomeScreen} />
            <Tab.Screen name='SummarySchedule' component={SummaryScheduleScreen} options={{ tabBarButton: () => null}} />
        </Tab.Navigator>
    )
}
*/
export const Routes = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={ SplashScreen } />
                <Stack.Screen name='Home' component={ HomeScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}