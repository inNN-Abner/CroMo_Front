import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ListOptionButton, PageSubtitle, Subcontainer } from '../../atoms'
import hours from '~/../archives/hours'

export const SetTimeList = ({ onTimeSelected }) => {

    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleButtonPress = (id: number) => {
        setSelectedId(id)
        onTimeSelected()
    }

    return (
        <Subcontainer align='center' maxHgt='100' mgLeft='5' bdRd='10' bg='darkGreen' wdt='175'>
            
            <PageSubtitle
                children={'Horários || Locais'}
                mgLeft='0'
                mgTop='0'
                pddLeft='0'
                fontSize='18'
            />

            <ScrollView>
                {hours.map((item) => (

                    <ListOptionButton
                        key={item.id}
                        onPress={() => handleButtonPress(item.id)}
                        justify='flex-start'
                        wdt='165'
                        hgt='50'
                        bdRd='5'
                        mgLeft='0'
                        mgTop='5'
                        color={selectedId === item.id ? 'white' : 'darkBlue'}
                        bg={selectedId === item.id ? 'darkRed' : 'white'}
                        source={item.hour}
                        label={item.classRoom}
                        fontSize='16'
                    />
                ))}
                
            </ScrollView>

        </Subcontainer>
    )
}