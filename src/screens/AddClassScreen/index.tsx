import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Headers, Container, SelectDay, Subcontainer, StylezedButton, Windows, ContactText, PageTitle, PageSubtitle, TimeInput, ClassroomSelector, InfoText, ClassInput } from '../../components'

export const AddClassScreen = ({ navigation }) => {
  const handleTimeSelected = (time: string) => {
    console.log('Horário selecionado:', time)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <Container>

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
            
          <Subcontainer align='center' maxHgt='50' mgLeft='0'>
            <TimeInput />
            <ClassInput />

          <Subcontainer bg='darkGreen' align='center' justify='center' mgLeft='0' wdt='325' hgt='125' mgTop='5'>
            
            <PageSubtitle alignSelf='center' mgTop='0' mgBottom='5' mgLeft='0' color='everWhite'
            >
              Selecione a sala/laboratório
            </PageSubtitle>

            <ClassroomSelector />

          </Subcontainer>
            </Subcontainer>

            <StylezedButton
                wdt='320'
                hgt='50'
                bdRd='10'
                label={'Definir monitoria'}
                onPress={() => {
                  navigation.navigate('Contacts')
                }} />

        </Subcontainer>

      </Container>

    </TouchableWithoutFeedback>
  )
}