import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Headers, Container, SelectDay, Subcontainer, StylezedButton, Windows, ContactText, PageTitle, PageSubtitle, TimeInput, ClassroomSelector, ClassInput } from '../../components'
import { useState } from 'react'
import { useAgendaActions } from '~/services/useAgendaActions'
import { useUserSchedule } from '~/services/useLoadUserSchedule'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import React from 'react'

export const AddClassScreen = ({ navigation }) => {
  const { agendas, loading, error, loadUserSchedule } = useUserSchedule()
  const { handleSubmit } = useAgendaActions(loadUserSchedule)
  
  const [day, setDay] = useState<string | null>(null)
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [materia, setMateria] = useState('')
  const [selectedClassroom, setSelectedClassroom] = useState<number | null>(null)
  const [resetForm, setResetForm] = useState(false)
  
  useFocusEffect(
    useCallback(() => {
      setResetForm(true)
      setDay(null)
      setStartTime('')
      setEndTime('')
      setMateria('')
      setSelectedClassroom(null)
  
      const timer = setTimeout(() => {
        setResetForm(false)
      }, 100)
  
      return () => clearTimeout(timer)
    }, [])
  )
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <Container>

        <Headers />
          <PageTitle>Agenda</PageTitle>
          <PageSubtitle>Definir minha agenda</PageSubtitle>
            
        <Subcontainer align='center' mgLeft='0'>

            <Windows
              wdt='319'
              hgt='50'
              bdRdBL='0'
              bdRdBR='0'
              bg='darkRed'
              mgTop='15'
              align='center'
              justify='center'
            >
              <ContactText 
                color='everWhite'
                fontSize='20'
                mgTop='-10'
                > 
                  Selecione um dia 
              </ContactText>
            </Windows>

            <SelectDay 
              onDaySelected={setDay} 
              resetTrigger={resetForm}
            />
            
          <Subcontainer align='center' maxHgt='50' mgLeft='0'>
            <TimeInput 
              startTime={startTime} 
              setStartTime={setStartTime} 
              endTime={endTime} 
              setEndTime={setEndTime} 
            />

          <ClassInput 
            value={materia}
            setMateria={setMateria}
          />

          <Subcontainer bg='darkGreen' align='center' justify='center' mgLeft='0' wdt='325' hgt='125' mgTop='5'>
            
            <PageSubtitle alignSelf='center' mgTop='0' mgBottom='5' mgLeft='0' color='everWhite'
            >
              Selecione a sala/laboratório
            </PageSubtitle>

            <ClassroomSelector 
              selectedClassroom={selectedClassroom} 
              setSelectedClassroom={setSelectedClassroom} 
            />

          </Subcontainer>
            </Subcontainer>

            <StylezedButton
                wdt='320'
                hgt='50'
                bdRd='10'
                label={'Definir agenda'}
                onPress={() => {
                  handleSubmit(
                      navigation,
                      day,
                      startTime,
                      endTime,
                      materia,
                      selectedClassroom
                  )
                }} />
        </Subcontainer>

      </Container>

    </TouchableWithoutFeedback>
  )
}