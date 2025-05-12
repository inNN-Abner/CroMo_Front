import React from 'react'
import { LocaleConfig } from 'react-native-calendars'
import { Calendar } from 'react-native-calendars'
import { useHours } from '~/../archives/hours'
import { useTheme } from '~/context/ThemeContext'
import { theme } from '~/styles'
import * as SecureStore from 'expo-secure-store'
import { useAgendamento } from '~/../archives/monitoringHours'

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: "Hoje"
}

LocaleConfig.defaultLocale = 'pt-BR';

interface CalendarEvent {
  id: number
  data: string
}

const getMarkedDates = (hours) => {
  return hours.reduce((acc: Record<string, any>, item) => {
    acc[item.date] = {
      selectedColor: '#FF6347',
      selectedTextColor: '#FF6347'
    }
    return acc
  }, {})
}

export const AppointmentCalendar = ({ navigation }) => {
  const { isDark } = useTheme()
  const hours = useHours()

  const { monitoring, isLoaded } = useAgendamento()

  const markedDates = monitoring.reduce((acc, item) => {
    const [dia, mes, ano] = item.date.split('/')
    const dateFormatted = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`
  
    acc[dateFormatted] = {
      marked: true,
      dotColor: 'red'
    }
  
    return acc
  }, {})
  
  return (
    <Calendar
      style={{
        borderWidth: 0,
        height: 370,
        width: 325,
        borderRadius: 15,
        elevation: 10
      }}
      theme={{
        backgroundColor: theme.darkTheme.colors.darkGreen,
        calendarBackground: isDark ? theme.lightTheme.colors.brisk : theme.darkTheme.colors.darkGreen,
        todayTextColor: theme.lightTheme.colors.redDarkRed,
        dayTextColor: '#FFFFFF',
        textDisabledColor: '#696969',
        arrowColor: theme.darkTheme.colors.darkRed,
        disabledArrowColor: '#D9E1E8',
        monthTextColor: '#FF3131',
        indicatorColor: '#7F0000',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
      }}
      markedDates={markedDates}
          onDayPress={async(day) => {
        navigation.navigate('SummarySchedule')
        await SecureStore.setItem("allAppointments", '0')
        await SecureStore.setItem("dataConsultada", day.dateString)
      } }
    />
  )
}