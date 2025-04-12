import React, { useState } from 'react'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'
import { useTheme } from '~/context/ThemeContext'
import { Subcontainer, StylezedButton, Windows, InfoText, CreateModal  } from '~/components'
import { theme } from '~/styles'
import * as SecureStore from 'expo-secure-store'

export const Calendar = ({ onDateSelected }) => {
  const { isDark } = useTheme()
  const today = new Date()
  
  today.setDate(today.getDate() + 1);
  const startDate = getFormatedDate(today, 'YYYY/MM/DD')

  const [openModal, setOpenModal] = useState(false)
  const [date, setDate] = useState('Selecione uma data')
  const [year, setYear] = useState(today.getFullYear())

  async function handleOnPress () {
    setOpenModal(!openModal)
  }
 
  async function handleChange (propDate: string) {
    const [year, month, day] = propDate.split('/').map(Number)
    const selectedDate = new Date(year, month - 1, day)
    const formattedDate = formatDate(selectedDate)
    const dataSelecionada = selectedDate.toISOString().split('T')[0]
    await SecureStore.setItem("dataSelecionada", dataSelecionada)
    setDate(formattedDate)
    setYear(selectedDate.getFullYear())
  }

  function formatDate(date: Date) {
    const day = date.getDate()
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date)
    const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date)

    return `${day}, ${month.charAt(0).toUpperCase() + month.slice(1)} - ${weekday.charAt(0).toUpperCase() + weekday.slice(1)}`
  }

  return (
    
    <Subcontainer align='center' justify='flex-start' maxHgt='10' mgLeft='0'>
        <Windows
            bg='darkRed'
            hgt='40'
            bdRdBL='0'
            bdRdBR='0'
            mgTop='15'
            justify='flex-end'
            >
            
            <InfoText
                color='everWhite'
                mgRight='20'
                mgTop='5'
                fontSize='18'
            >
                {year.toString()}
            </InfoText>
        </Windows>

        <Windows 
            align='center'
            justify='center'
            hgt='50'    
            mgTop='-5'
            bdRdTL='0'
            bdRdTR='0'   
            >
              
          <StylezedButton
              label={date}
              bg='transparent'
              color='whiteGreen'
              wdt='330'
              mgTop='0'
              onPress={handleOnPress}
              />
            
              <CreateModal
              visible={openModal} 
              bg='white' 
              bdRd='30'
              >
                <DatePicker
                  mode='calendar'
                  selected={date}
                  minimumDate={startDate}
                  onDateChange={(propDate) => {
                    handleChange(propDate)
                    onDateSelected()
                  }}
                  options={{
                    backgroundColor: isDark ? theme.darkTheme.colors.white : theme.lightTheme.colors.white,
                    textHeaderColor: isDark ? theme.darkTheme.colors.brisk : theme.lightTheme.colors.brisk,
                    textDefaultColor: isDark ? theme.darkTheme.colors.brisk : theme.lightTheme.colors.brisk,
                    selectedTextColor: theme.darkTheme.colors.brisk,
                    mainColor: theme.darkTheme.colors.darkRed,
                    textSecondaryColor: theme.darkTheme.colors.brisk,
                  }}
                  />
                  
                  <StylezedButton 
                  label={'Selecionar'}
                  bg='darkRed'
                  mgTop='-10'
                  onPress={handleOnPress}
                  />
              </CreateModal>

          </Windows>

    </Subcontainer>
  )
}