import { useState } from 'react'
import { DefineTimeScheduling } from '../../components/organism/DefineTimeScheduling'
import { Calendar, Container, CreateModal, Headers, InfoText, MonitorList, PageSubtitle, PageTitle, StylezedButton, Subcontainer } from '~/components'

export const MonitoringScreen = ({ navigation }) => {

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
    setBodyMessage('Clique em "Confirmar" para agendar sua aula.\n Caso não vá comparecer, será necessário desmarcar o agendamento com antecedência!')
    handleOnPress()
  }

  const modalCancel = () => {
    setTitleMessage ('Cancelar agendamento')
    setBodyMessage('Tem certeza que deseja\ncancelar o agendamento?')
    handleOnPress()
  }

  const handleConfirm = () => {
    setSelectedDate(null)
    setSelectedMonitor(null)
    setSelectedTime(null)
    navigation.navigate('Contacts')
  }

  return (
    <Container>

      <Headers />
        <PageTitle>Calendário</PageTitle>
        <PageSubtitle>Novo agendamento de aula</PageSubtitle>

        <Subcontainer maxHgt='50' justify='flex-start' mgLeft='0'>
          {step >= 1 && (
            <Calendar onDateSelected={(date) => {setSelectedDate(date); setStep(2) }}  />
          )}

          <Subcontainer maxHgt='100' justify='center' mgLeft='0' mgTop='75' dir='row'>
          {step >= 2 && (
            <MonitorList onMonitorSelected={(monitor) => { setSelectedMonitor(monitor); setStep(3) }} />
          )}

          {step >= 3 && (
            <DefineTimeScheduling onTimeSelected={(time) => { setSelectedTime(time); setStep(4) }} />
          )}
          </Subcontainer>

            {step >= 4 && (
            <Subcontainer dir='row' justify='center' mgLeft='0' bdRd='0'>
              <StylezedButton
                bg='white'
                mgTop='10'
                bdRd='10'
                color='darkRed'
                label={'Cancelar'}
                onPress={() => modalCancel()}
              />

              <StylezedButton
                  bg='white'
                  mgTop='10'
                  bdRd='10'
                  mgLeft='20'
                  color='darkBlue'
                  label={'Agendar'}
                  onPress={() => modalConfirm()}
              />

          
              <CreateModal
                  visible={openModal}
                  bg='white'
                  bdRd='10' 
                  wdt='300'
                  hgt='150'
                  pdd='0'
                  align='center'
                  justify='center'
              >   
                  <InfoText fontFamily='bold' color='brisk' mgTop='-15'  mgLeft='0' fontSize='16'>
                    {titleMessage}
                  </InfoText>

                  <InfoText fontFamily='regular' color='brisk' mgTop='10' fontSize='14' mgLeft='0'>
                    {bodyMessage}
                  </InfoText>

                    <Subcontainer dir='row-reverse' mgLeft='0' justify='center' align='center' maxHgt='0' mgTop='25'>
                      <StylezedButton 
                        label={'Agendar'}
                        bg='darkRed'
                        mgTop='10'
                        wdt='150'
                        hgt='40'
                        bdRd='10'
                        fontSize='18'
                        onPress={() => {
                            handleOnPress(),
                            navigation.navigate('Appointments')
                        }}  />

                      <StylezedButton 
                        label={'Cancelar'}
                        bg='white'
                        color='darkRed'
                        mgTop='10'
                        wdt='150'
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