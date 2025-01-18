import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Headers, Container, SelectDay, Subcontainer, StylezedButton, Windows, ContactText, PageTitle, PageSubtitle, TimeInput } from '../../components'

export const MonitorScheduleScreen = ({ navigation }) => {
  const handleTimeSelected = (time: string) => {
    console.log('Horário selecionado:', time)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <Container align='flex-start'>

        <Headers />
          <PageTitle>Agenda</PageTitle>
          <PageSubtitle>Definir horário do monitor</PageSubtitle>
            
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

            <SelectDay />
            
          <Subcontainer align='center' maxHgt='62' mgLeft='0'>
            <TimeInput />

              <StylezedButton 
                wdt='320'
                hgt='50'
                bdRd='10'
                label={'Definir monitoria'}
                onPress={() => {
                  navigation.navigate('Contacts')
                }} />
            </Subcontainer>
        </Subcontainer>

      </Container>

    </TouchableWithoutFeedback>
  )
}