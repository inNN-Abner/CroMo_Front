import React, { useState } from 'react'
import { Subcontainer, PageSubtitle, SetTimeButton, Divider } from '~/components/atoms'
import hours from '~/../archives/hours'
import { ScrollView } from 'react-native-gesture-handler'

export const DefineTimeScheduling: React.FC<{ onTimeSelected: (time: string) => void }> = ({ onTimeSelected }) => {

    const [selectedId, setSelectedId] = useState<number | null>(null)
    
    const handleButtonPress = (id: number, time: string) => {
        setSelectedId(id)
        onTimeSelected(time)
    }

    return (
        <Subcontainer align='center' maxHgt='100' mgTop='0' mgLeft='5' bdRd='10' wdt='175'>

            <PageSubtitle
                children={'Horários'}
                mgLeft='5'
                mgTop='0'
                pddLeft='0'
                fontSize='18'
            />
            
            <Divider />

            <ScrollView>
                <Subcontainer wdt='175' mgLeft='0' mgTop='0'>
                    {hours.map((item, index) => (
                        <SetTimeButton
                            key={item.id}
                            onPress={() => handleButtonPress(item.id, item.hour)}
                            justify='center'
                            align='center'
                            hgt='50'
                            bdRd='10'
                            mgLeft='5'
                            mgTop='5'
                            color='white'
                            bg={selectedId === item.id ? 'darkRed' : 'gray'}
                            info={item.hour + '\n' + item.classRoom}
                            fontSize='14'
                        />
                    ))}
                </Subcontainer>
            </ScrollView>

        </Subcontainer>
    )
}