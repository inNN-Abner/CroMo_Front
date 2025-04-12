import { useEffect, useState } from 'react'
import { Calendar, Container, CreateModal, DefineTimeScheduling, Headers, InfoText, MonitorList, PageSubtitle, PageTitle, RedCancelButton, SaveButton, StylezedButton, Subcontainer } from '~/components'
import * as SecureStore from 'expo-secure-store'

export const AddMonitoringScreen = ({ navigation }) => {

  const [openModal, setOpenModal] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedMonitor, setSelectedMonitor] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [confirming, setConfirming] = useState(false)
  const [titleMessage, setTitleMessage] = useState('');
  const [bodyMessage, setBodyMessage] = useState('');

  function handleOnPress () {
    setOpenModal(!openModal)
  }

  const modalConfirm = () => {
    setTitleMessage ('Confirmar agendamento')
    setBodyMessage('Clique em "Confirmar" para agendar sua monitoria.')
    handleOnPress()
  }

  const modalCancel = () => {
    setTitleMessage ('Cancelar agendamento')
    setBodyMessage('Tem certeza que deseja\ncancelar o agendamento?')
    handleOnPress()
  }

  const handleConfirm = () => {
    navigation.navigate('Monitoring')
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStep(1);
      setSelectedDate(null);
      setSelectedMonitor(null);
      setSelectedTime(null);
      setOpenModal(false);
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
            <Calendar onDateSelected={(date) => {setSelectedDate(date); setStep(2) }}  />
          )}

          <Subcontainer maxHgt='100' justify='center' mgLeft='0' mgTop='75' dir='row'>
          {step >= 2 && (
            <MonitorList onMonitorSelected={ (monitor) => { setSelectedMonitor(monitor); SecureStore.setItem("monitorSelecionado", monitor.toString()); console.log(monitor); setStep(3) }} />
          )}

          {step >= 3 && (
            <DefineTimeScheduling onTimeSelected={(time) => { setSelectedTime(time); setStep(4) }} />
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
                  <InfoText fontFamily='bold' color='brisk' mgTop='-25'  mgLeft='0' fontSize='17'>
                    {titleMessage}
                  </InfoText>

                  <InfoText fontFamily='regular' color='brisk' mgTop='10' fontSize='15' mgLeft='0'>
                    {bodyMessage}
                  </InfoText>

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
                            handleConfirm()
                        }}  />

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
                        }}  />
                    </Subcontainer>
              </CreateModal>
            </Subcontainer>
          )}
        </Subcontainer>

    </Container>
  )
}