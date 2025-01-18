import { useState } from 'react'
import { GenericText, Container, HeaderPage, Subcontainer, Calendar, StylezedButton, PageSubtitle, PageTitle } from '../../components'
import { CreateModal } from '../../components/molecules'
import { DefineTimeScheduling } from '../../components/organism/DefineTimeScheduling'
import { LanguageList } from '../../components/organism/LanguageList'
import { TeacherList } from '../../components/organism/TeacherSelectList'

export const SchedulingScreen = ({ navigation }) => {

  const [openModal, setOpenModal] = useState(false)
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [selectedTeacher, setSelectedTeacher] = useState(null)
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
    setSelectedLanguage(null)
    setSelectedTeacher(null)
    setSelectedTime(null)
    navigation.navigate('Contacts')
  }

  return (
    <Container>

      <HeaderPage />
        <PageTitle>Calendário</PageTitle>
        <PageSubtitle>Novo agendamento de aula</PageSubtitle>

        <Subcontainer maxHgt='28' justify='flex-start' mgLeft='0'>

          {step >= 1 && (
              <Calendar onDateSelected={(date) => {setSelectedDate(date); setStep(2) }}  />
          )}
            <Subcontainer maxHgt='100' align='justify-start' justify='center' mgLeft='0' mgTop='90' dir='row'>
            {step >= 2 && (
                <LanguageList onLanguageSelected={(language) => { setSelectedLanguage(language); setStep(3) }} />
            )}

            {step >= 3 && (
                <TeacherList onTeacherSelected={(teacher) => { setSelectedTeacher(teacher); setStep(4) }} />
            )}
              </Subcontainer>

              <Subcontainer maxHgt='100' align='justify-start' justify='center' mgLeft='0' dir='row'>
              {step >= 4 && (
                <DefineTimeScheduling onTimeSelected={(time) => { setSelectedTime(time); setStep(5) }} />
              )}
            </Subcontainer>


            {step >= 5 && (
            <Subcontainer dir='row' justify='center' mgLeft='0' mgTop='-30' bdRd='0'>
              <StylezedButton
                bg='white'
                mgTop='0'
                bdRd='10'
                color='darkRed'
                label={'Cancelar'}
                onPress={() => modalCancel()}
              />

              <StylezedButton
                  bg='white'
                  mgTop='0'
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
              >   
                  <GenericText ftype='bold' color='darkBlue' mgTop='-15'  mgLeft='0' fontSize='16'>
                    {titleMessage}</GenericText>

                  <GenericText ftype='regular' color='darkBlue' mgTop='10' fontSize='14' mgLeft='0'>
                    {bodyMessage}</GenericText>

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
                      }}
                      />

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