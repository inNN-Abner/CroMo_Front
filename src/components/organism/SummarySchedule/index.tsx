import React, { useState } from 'react'
import { CancelButton, CreateModal, PageSubtitle, PageTitle, Photo, StylezedButton, Subcontainer, Windows } from '~/components'
import { ScrollView } from 'react-native-gesture-handler'
import monitoringHours from '../../../../archives/monitoringHours'
import { useUserSchedule } from '~/services/useUserScheduleHooks'

const Calendar = require('~/../assets/Calendar.png')
const Clock = require( '~/../assets/Clock.png')

export const SummarySchedule = ({ navigation }) => {
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [titleMessage, setTitleMessage] = useState('')
    const [bodyMessage, setBodyMessage] = useState('')
    const {handleDelete} = useUserSchedule()
    
    function handleOnPress() {
        setOpenCreateModal(!openCreateModal)
    }

    const CreateModalCancel = () => {
        setTitleMessage('Desmarcar monitoria')
        setBodyMessage('Tem certeza que deseja cancelar o\nagendamento? Essa ação é irreversível!')
        handleOnPress()
    }

    return (
    <Subcontainer mgLeft='0' maxHgt='75' align='center' >
    <ScrollView>

        {monitoringHours.map((item) => (
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
                    <Photo
                        hgt='40'
                        wdt='40'
                        mgTop='0'
                        mgLeft='15'
                        source={item.icon} 
                    />
                    <PageTitle
                        mgTop='0'
                        mgLeft='5'
                        color='brisk'
                    >{item.class}
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
                    align='flex-start'
                >   
            <Subcontainer mgLeft='0' mgTop='15' bg='darkGreen' dir='row' maxHgt='16' bdRd='0' align='center' justify='flex-start'>
                <Photo
                    source={Calendar}
                    wdt='35'
                    hgt='35'
                    mgTop='0'
                    mgLeft='15'
                    bdRd='0'
                />
                    <PageSubtitle color='everWhite'>
                        {item.date}
                    </PageSubtitle>
                    </Subcontainer>


            <Subcontainer mgLeft='0' mgTop='10' bg='darkGreen' dir='row' maxHgt='16' bdRd='0' align='center' justify='flex-start'>
                <Photo
                    source={Clock}
                    wdt='35'
                    hgt='35'
                    mgTop='0'
                    mgLeft='15'
                    bdRd='0'
                />

            <PageSubtitle color='everWhite'>
                {item.hour}
            </PageSubtitle>

        </Subcontainer>

        <Subcontainer mgLeft='0' mgTop='10' bg='darkGreen' dir='row' maxHgt='16' bdRd='0' align='center' justify='flex-start'>
            <Photo
                source={item.photo}
                wdt='35'
                hgt='35'
                mgTop='0'
                mgLeft='15'
            />
            <PageSubtitle color='everWhite'>
                {item.monitorName}
            </PageSubtitle>
        </Subcontainer>

        <Subcontainer mgLeft='0' mgTop='5' bg='darkGreen' dir='row' maxHgt='27' bdRd='0' justify='flex-end'>
            <CancelButton
                bg='everWhite'
                wdt='215'
                hgt='40'
                mgTop='5'
                mgRight='5'
                bdRd='15'
                color='darkRed'
                label={'Desmarcar monitoria'}
                fontSize='16'
                onPress={CreateModalCancel}
            />
        </Subcontainer>
        </Windows>
        </React.Fragment>
        ))}

        <CreateModal visible={openCreateModal} bg='white' bdRd='10' wdt='300' hgt='158' pdd='0'>

            <PageTitle color='brisk' mgTop='-10' mgLeft='0' fontSize='20' >{titleMessage}</PageTitle>
            <PageSubtitle color='brisk' fontSize='15' mgLeft='5' alignSelf='center' >{bodyMessage}</PageSubtitle>
            
            <Subcontainer dir='row-reverse' bg='brisk' mgLeft='0' justify='center' align='center' maxHgt='0' mgTop='25'>
                <StylezedButton
                    label={'Cancelar aula'}
                    bg='darkRed'
                    mgTop='27'
                    wdt='140'
                    hgt='40'
                    bdRd='10'
                    fontSize='16'
                    onPress={() => {
                        handleOnPress()
                        navigation.navigate('Monitoring')
                    }}
                />
                <StylezedButton
                    label={'Manter aula'}
                    bg='white'
                    color='darkRed'
                    mgTop='27'
                    wdt='140'
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