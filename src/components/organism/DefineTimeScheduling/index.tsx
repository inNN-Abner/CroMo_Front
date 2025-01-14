import React, { useState } from 'react'
import { DefineTimeButton, Subcontainer, PageSubtitle } from '../../atoms'
import hours from '~/../archives/hours'

export const DefineTimeScheduling: React.FC<{ onTimeSelected: (time: string) => void }> = ({ onTimeSelected }) => {

    const [selectedId, setSelectedId] = useState<number | null>(null)
    
    const handleButtonPress = (id: number, time: string) => {
        setSelectedId(id)
        onTimeSelected(time)
    }

    return (
        <Subcontainer dir='column' align='center' mgLeft='0' maxHgt='100' mgTop='10'>
            <PageSubtitle
                children={'Horários disponíveis'}
                mgLeft='0'
                mgTop='0'
                pddLeft='0'
                fontSize='18'
            />

            <Subcontainer dir='row' align='center' justify='center' wrap='wrap' maxHgt='60' mgLeft='0' bdRd='10' bg='darkGrayII'>
                {hours.map((item, index) => (
                    <DefineTimeButton
                        key={item.id}
                        onPress={() => handleButtonPress(item.id, item.hour)}
                        justify='center'
                        align='center'
                        wdt='120'
                        hgt='50'
                        bdRd='10'
                        mgLeft={index % 3 !== 0 ? '6' : '0'}
                        mgTop={index >= 3 ? '0' : '18'}
                        color={'white'}
                        bg={selectedId === item.id ? 'darkRed' : 'gray'}
                        hour={item.hour}
                        fontSize='14'
                    />
                ))}
            </Subcontainer>
        </Subcontainer>
    )
}