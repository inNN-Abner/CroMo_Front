import React, { useState } from 'react'
import { CancelButton, CreateModal, InfoText, PageSubtitle, PageTitle, Photo, SaveButton, StylezedButton, Subcontainer, TextInput, Windows } from '~/components'
import { ScrollView } from 'react-native-gesture-handler'
import monitoringHours from '../../../../archives/monitoringHours'
import warnings from '~/../archives/warnings'

const Calendar = require('~/../assets/Calendar.png')
const Clock = require( '~/../assets/Clock.png')

export const EditInfo = ({ navigation }) => {
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [titleMessage, setTitleMessage] = useState('');
    const [bodyMessage, setBodyMessage] = useState('');

    function handleOnPress() {
        setOpenCreateModal(!openCreateModal)
    }

    const CreateModalCancel = () => {
        setTitleMessage('Salvar texto')
        setBodyMessage('Tem certeza que deseja alterar as informações?')
        handleOnPress()
    }

    return (
    <Subcontainer mgLeft='0' maxHgt='75' align='center' >
    <ScrollView>

        {warnings.map((item) => (
            <React.Fragment key={item.id}>

            <Windows 
                bg='white'
                hgt='50'
                bdRdBL='0'
                bdRdBR='0'
                mgTop='10'
                justify='flex-end'
            >
                <Subcontainer dir='row' bg='white' mgTop='0' bdRd='100' align='center'>

                    <PageTitle
                        mgTop='0'
                        mgLeft='15'
                        color='brisk'
                    >{item.title}
                    </PageTitle>
                    </Subcontainer>
                </Windows>

                <Windows
                    bg='darkGreen'
                    mgTop='0'
                    hgt='180'
                    bdRdTL='0'
                    bdRdTR='0'
                    dir='column'
                    align='center'
                >   
                
            <TextInput 
                mgLeft='0' 
                bgColor='white' 
                wdt='280' 
                hgt='100'
                bdRd='10'
                mgTop='12'
                wrap='wrap'
                placeholder={'Digite o seu texto'}
            >
                {item.info}
            </TextInput>

        <Subcontainer mgLeft='0' mgTop='5' bg='darkGreen' dir='row' maxHgt='20' bdRd='0' justify='flex-end'>
            <SaveButton
                bg='darkRed'
                wdt='215'
                hgt='40'
                mgTop='5'
                mgRight='10'
                bdRd='15'
                color='darkRed'
                label={'Salvar'}
                fontSize='16'
                onPress={CreateModalCancel}
            />aa
        </Subcontainer>
        </Windows>
        </React.Fragment>
        ))}

        <CreateModal visible={openCreateModal} bg='white' bdRd='10' wdt='300' hgt='150' pdd='0' align='center'>

            <PageTitle color='brisk' fontSize='20' >{titleMessage}</PageTitle>
            <PageSubtitle color='brisk' fontSize='15' >{bodyMessage}</PageSubtitle>
            
            <Subcontainer dir='row-reverse' mgLeft='0' justify='center' align='center' maxHgt='0' mgTop='25'>
                <StylezedButton
                    label={'Alterar'}
                    bg='darkRed'
                    mgTop='15'
                    wdt='150'
                    hgt='40'
                    bdRd='10'
                    fontSize='16'
                    onPress={() => {
                        handleOnPress();
                        navigation.navigate('Monitoring');
                    }}
                />
                <StylezedButton
                    label={'Cancelar'}
                    bg='white'
                    color='darkRed'
                    mgTop='15'
                    wdt='150'
                    hgt='40'
                    bdRd='10'
                    fontSize='16'
                    onPress={handleOnPress}
                />
            </Subcontainer>
        </CreateModal>
    </ScrollView>
    </Subcontainer>
    )
}