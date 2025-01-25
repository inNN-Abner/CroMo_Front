import React, { useState } from 'react'
import { Divider, ListOptionButton, PageSubtitle, Subcontainer } from '~/components/atoms'
import contacts from '~/../archives/contacts'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '~/context/ThemeContext'
import { theme } from '~/styles'

export const MonitorList = ({ onMonitorSelected }) => {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleButtonPress = (id: number) => {
        setSelectedId(id)
        onMonitorSelected()
    }

    return (
        <Subcontainer align='center' maxHgt='100' mgLeft='5' mgTop='0' bdRd='10' wdt='175'>
            
            <PageSubtitle
                children={'Monitores'}
                mgLeft='5'
                mgTop='0'
                pddLeft='0'
                fontSize='18'
            />

            <Divider />

            <ScrollView
                style={{ width: '100%' }} 
                contentContainerStyle={{ paddingVertical: 0 }}            
            >
                {contacts.map((item) => (
                    <ListOptionButton
                        key={item.id}
                        onPress={() => handleButtonPress(item.id)}
                        justify='flex-start'
                        wdt='165'
                        hgt='50'
                        bdRd='5'
                        mgLeft='5'
                        mgTop='5'
                        color={selectedId === item.id ? 'everWhite' : 'brisk' }
                        bg={selectedId === item.id ? 'darkRed' : 'white'}
                        source={item.photo}
                        label={item.name}
                        fontSize='14'
                    />
                ))}
                </ScrollView>
        </Subcontainer>
    )
}