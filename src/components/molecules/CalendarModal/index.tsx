import React, { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import { Subcontainer, StylezedButton, Windows, InfoText, CreateModal } from '~/components'
import * as SecureStore from 'expo-secure-store'
import { parse } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
  dayNamesShort: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-BR'

type CalendarModalProps = {
  onDateSelected: (date: Date) => void
}

export const CalendarModal = ({ onDateSelected }: CalendarModalProps) => {
  const today = new Date()
  const startDate = today.toISOString().split('T')[0]

  const [openModal, setOpenModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [formattedDate, setFormattedDate] = useState('Selecione uma data')
  const [year, setYear] = useState(today.getFullYear())

  const handleDateChange = async (day: { dateString: string }) => {
    const isoDate = day.dateString
    const formatted = formatDate(isoDate)
  
    const [year, month, date] = isoDate.split('-').map(Number)
    const localDate = new Date(year, month - 1, date) // <-- CORRETO!
  
    console.log('🟡 Data ISO recebida:', isoDate)
    console.log('🟢 Date criada localmente:', localDate.toString())
    console.log('🔵 Dia da semana (localDate.getDay()):', localDate.getDay())
  
    setSelectedDate(isoDate)
    setFormattedDate(formatted)
    setYear(localDate.getFullYear())
  
    await SecureStore.setItem("dataSelecionada", isoDate)
    onDateSelected(localDate)
    setOpenModal(false)
  }
  
  const formatDate = (isoDateString: string) => {
    const [year, month, day] = isoDateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)

    const dayNumber = date.getDate()
    const monthName = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
    const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date)

    return `${dayNumber}, ${capitalize(monthName)} - ${capitalize(weekday)}`
  }

  const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

  return (
    <Subcontainer align="center" justify="flex-start" maxHgt="10" mgLeft="0">
      <Windows bg="darkRed" hgt="40" bdRdBL="0" bdRdBR="0" mgTop="15" justify="flex-end">
        <InfoText color="everWhite" mgRight="20" mgTop="5" fontSize="18">
          {year.toString()}
        </InfoText>
      </Windows>

      <Windows align="center" justify="center" hgt="50" mgTop="-5" bdRdTL="0" bdRdTR="0">
        <StylezedButton
          label={formattedDate}
          bg="transparent"
          color="whiteGreen"
          wdt="330"
          mgTop="0"
          onPress={() => setOpenModal(true)}
        />

        <CreateModal visible={openModal} bg="everWhite" bdRd="30">
          <Calendar
            minDate={startDate}
            onDayPress={handleDateChange}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#a82325',
                selectedTextColor: '#ffffff'
              }
            }}
            theme={{
              calendarBackground: '#fff',
              textSectionTitleColor: '#000',
              selectedDayBackgroundColor: '#a82325',
              selectedDayTextColor: '#fff',
              todayTextColor: '#a82325',
              dayTextColor: '#000',
              arrowColor: '#a82325',
              monthTextColor: '#000',
              textDayFontSize: 14,
              textMonthFontSize: 14,
              textDayHeaderFontSize: 14,
            }}
            style={{
              width: 280,
              height: 335,
              borderRadius: 10,
              alignSelf: 'center'
            }}
          />

          <StylezedButton
            label="Fechar"
            bg="darkRed"
            mgTop="10"
            onPress={() => setOpenModal(false)}
          />
        </CreateModal>
      </Windows>
    </Subcontainer>
  )
}
