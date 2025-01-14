import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Headers, Container, SelectDay, Subcontainer, DefineTimeScheduling, StylezedButton, Windows, InfoText, ContactText, PageTitle, PageSubtitle } from '../../components'

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
            
            <DefineTimeScheduling onTimeSelected={handleTimeSelected} />
            
            <Subcontainer align='center' justify='flex-end' hgt='100'>
              
              <StylezedButton 
                wdt='350'
                hgt='50'
                bdRd='10'
                label={'Definir agenda'}
                onPress={() => {
                  navigation.navigate('Contacts')
                }} />
            
            </Subcontainer>
        </Subcontainer>

      </Container>

    </TouchableWithoutFeedback>
  )
}