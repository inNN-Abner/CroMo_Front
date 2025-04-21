import { useEffect, useState } from 'react'
import { MonitorList, Calendar, Container, CreateModal, DefineTimeScheduling, Headers, InfoText, PageSubtitle, PageTitle, RedCancelButton, SaveButton, StylezedButton, Subcontainer, ModalText } from '~/components'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from '~/configs/config'

export const AddMonitoringScreen = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedMonitoria, setSelectedMonitoria] = useState(null)
  const [monitoriaIdToConfirm, setMonitoriaIdToConfirm] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedWeekday, setSelectedWeekday] = useState(null)
  const [confirming, setConfirming] = useState(false)
  const [titleMessage, setTitleMessage] = useState('')
  const [bodyMessage, setBodyMessage] = useState('')
  const weekDays = ['Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado', 'Domingo']
  const filterWeekday = selectedDate ? weekDays[new Date(selectedDate).getDay()] : null

  function handleOnPress() {
    setOpenModal(!openModal)
  }

  const modalConfirm = () => {
    setTitleMessage('Confirmar agendamento')
    setBodyMessage('Clique em "Confirmar" para agendar sua monitoria.')
    handleOnPress()
  }

  const modalCancel = () => {
    setTitleMessage('Cancelar agendamento')
    setBodyMessage('Tem certeza que deseja\ncancelar o agendamento?')
    handleOnPress()
  }
  
  const handleDateSelected = (date) => {
    if (!date) {
      console.log("Data inválida selecionada!")
      return
    }
  
    setSelectedDate(date)
  
    const dayOfWeek = new Date(date).toLocaleDateString('pt-BR', { weekday: 'long' })
    setSelectedWeekday(dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1))
    setStep(2)
  }

  const handleMonitorSelection = async (monitoriaId) => {
    const token = await SecureStore.getItemAsync('token')
    console.log('Monitor selecionado:', monitoriaId)
    console.log('Data selecionada:', selectedDate)

    if (!selectedDate) {
      console.log("Data não selecionada! Abortando seleção de monitor.")
      return
    }
    setSelectedMonitoria(monitoriaId)
    setMonitoriaIdToConfirm(monitoriaId)
      setStep(3)
  }

  const handleCancel = () => {
    navigation.navigate('Monitoring')
  }

  const handleConfirm = async (monitoriaId = monitoriaIdToConfirm) => {
    const token = await SecureStore.getItemAsync('token')

    if (!selectedDate || !selectedMonitoria || !selectedTime) {
      console.log("Faltam dados para agendar")
      console.log("selectedDate:", selectedDate, "selectedMonitoria:", selectedMonitoria, "selectedTime:", selectedTime)
      return
    }
      
    try {
      console.log("Enviando para API:", {
        idMonitoria: selectedMonitoria,
        data: selectedDate,
        obs: ''
      })
      
      const response = await fetch(`${API_URL}/agendamento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token || ''
        },
        body: JSON.stringify({
          idMonitoria: selectedMonitoria,
          data: selectedDate.replace(/\//g, "-"),
          obs: ''
        })
      })
  
      const result = await response.json()
      console.log("Resposta do agendamento:", result)

      if (!response.ok) {
        alert(result.error || 'Erro ao agendar a monitoria! Verifique se você já não está com a monitoria marcada para este dia')
        return
      }
  
      navigation.navigate('Monitoring')

    } catch (error) {
      console.error("Erro ao agendar:", error)
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStep(1)
      setSelectedDate(null)
      setSelectedMonitoria(null)
      setSelectedTime(null)
      setOpenModal(false)
    })
    return unsubscribe
  }, [navigation])
  

  return (
    <Container>
      <Headers />
      <PageTitle>Monitoria</PageTitle>
      <PageSubtitle>Novo agendamento de monitoria</PageSubtitle>

      <Subcontainer maxHgt='50' justify='flex-start' mgLeft='0'>
        {step >= 1 && (
          <Calendar onDateSelected={(date) => { 
            if (!date) {
              console.log("Data inválida selecionada!")
              return
            }
            setSelectedDate(date)
            setStep(2)
          }} />
        )}

      <Subcontainer maxHgt='100' justify='center' mgLeft='0' mgTop='75' dir='row'>
        {step >= 2 && (
          <MonitorList 
            onMonitorSelected={handleMonitorSelection} 
            filterWeekday={filterWeekday} 
          />      
        )}

        {step >= 3 && (
          <DefineTimeScheduling 
            onTimeSelected={(time) => {
              setSelectedTime(time)
              setStep(4) }} />
        )}
      </Subcontainer>

        {step >= 4 && (
          <Subcontainer dir='row' justify='center' mgLeft='0' bdRd='0'>
            <RedCancelButton
              bg='brisk'
              wdt='165'
              mgTop='10'
              bdRd='10'
              bdColor='darkRed'
              bdWdt='2'
              color='darkRed'
              label={'Cancelar'}
              onPress={() => modalCancel()}
            />

            <SaveButton
              bg='darkGreen'
              wdt='165'
              mgTop='10'
              bdRd='10'
              mgLeft='20'
              color='everWhite'
              label={'Agendar'}
              onPress={() => modalConfirm()}
            />

            <CreateModal
              visible={openModal}
              bg='white'
              bdRd='10'
              wdt='300'
              hgt='150'
              pdd='15'
            >
              <ModalText fontFamily='bold' color='brisk' mgTop='-25' mgLeft='0' fontSize='17'>
                {titleMessage}
              </ModalText>

              <ModalText fontFamily='regular' color='brisk' mgTop='10' fontSize='15' mgLeft='0'>
                {bodyMessage}
              </ModalText>

              <Subcontainer dir='row-reverse' mgLeft='0' justify='center' align='center' maxHgt='0' mgTop='25'>
                <StylezedButton
                  label={'Confirmar'}
                  bg='darkRed'
                  mgTop='25'
                  mgLeft='0'
                  wdt='130'
                  hgt='40'
                  bdRd='10'
                  fontSize='18'
                  onPress={() => {
                    handleOnPress()
                    if (titleMessage === 'Confirmar agendamento') {
                      handleConfirm(monitoriaIdToConfirm)
                    } else if (titleMessage === 'Cancelar agendamento') {
                      handleCancel()
                    }
                  }}
                />

                <StylezedButton
                  label={'Cancelar'}
                  bg='white'
                  color='darkRed'
                  mgTop='25'
                  wdt='130'
                  hgt='40'
                  bdRd='10'
                  fontSize='18'
                  onPress={() => {
                    handleOnPress()
                  }}
                />
              </Subcontainer>
            </CreateModal>
          </Subcontainer>
        )}
      </Subcontainer>
    </Container>
  )
}
