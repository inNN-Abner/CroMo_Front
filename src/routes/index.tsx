import React, { useEffect, useState } from 'react'
import { theme } from '../styles'
import { Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '~/context/ThemeContext'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ContactsScreen, HomeScreen, LoginScreen, AddMonitoringScreen, MonitorScheduleScreen, SummaryScheduleScreen, PerfilScreen, AddClassScreen } from '../screens'
import { ContactsDetailScreen } from '~/screens/ContactsDetailScreen'
import { ReportSchedulingScreen } from '~/components/organism/ReportSchedulingCalendar'
import { PerfilGrid } from '~/components'
import { EditPerfilScreen } from '~/screens/EditPerfilScreen'

interface BottomRoutes{
    Home: string
    Monitoring: string
    Contacts: string
    Perfil: string
}

const routeIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Home: 'home',
    Monitoring: 'calendar',
    Contacts: 'id-card',
    Perfil: 'person'
}

const BottomRoute = () => {
    const Tab = createBottomTabNavigator()
    const { isDark } = useTheme()
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
                    return <Ionicons name={iconName} size={theme.metrics.px(34)} color={focused ? 'red' : theme.lightTheme.colors.darkRed}/>
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: isDark ? theme.darkTheme.colors.white : theme.darkTheme.colors.gray,
                    display: isKeyboardVisible ? 'none' : 'flex',
                },
            })}
            >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Monitoring' component={ReportSchedulingScreen} />
            <Tab.Screen name='Contacts' component={ContactsScreen} />
            <Tab.Screen name='ContactsDetail' component={ContactsDetailScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='MonitorSchedule' component={MonitorScheduleScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='AddMonitoring' component={AddMonitoringScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='SummarySchedule' component={SummaryScheduleScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='AddClass' component={AddClassScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='EditPerfil' component={EditPerfilScreen} options={{ tabBarButton: () => null}} />
            <Tab.Screen name='Perfil' component={PerfilScreen} />
                        
        </Tab.Navigator>
    ) 
}

export const Routes = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Login' component={ LoginScreen } />
                <Stack.Screen name='HomeBottom' component={ BottomRoute } />
                <Stack.Screen name="PerfilGrid" component={ PerfilGrid } />
                <Stack.Screen name="AddClass" component={AddClassScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}