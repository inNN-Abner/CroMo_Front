import React from 'react'
import monitoringHours from '~/../archives/monitoringHours'
import { FlatList, Text } from 'react-native'
import { AddButton, EditButton, ListContainer, TrashButton } from '~/components/atoms'
import { TableGrid } from '~/components/molecules/Grid'

export const PerfilGrid = ({ navigation }) => {
    return (
    <>
    <FlatList data={ monitoringHours } renderItem={({ item }) => (

        <ListContainer
            wdt='343'
            mgTop='-3'
            mgLeft='0'
            bg='darkGreen'
            dir='row'
        >

            <TableGrid fontSize='11' color='white' wdt='55' mgLeft='5'>{item.weekDay}</TableGrid>
            <TableGrid fontSize='14' wdt='115' fontFamily='regular' mgLeft='5'>{item.class}</TableGrid>
            <TableGrid fontSize='14' wdt='115' fontFamily='regular' mgLeft='5'>
                <Text style={{ fontWeight: 'bold' }}>{item.locale}</Text> {`\n`} {item.hour}</TableGrid>

            <TrashButton
                label={'Teste'}
                wdt='40'
                hgt='50'
                bdRd='10'
                mgTop='3'
                mgLeft='5'
                bg='darkRed' 
            />
        </ListContainer>
        )}
        >
        </FlatList>
        
        <ListContainer
            mgTop='0'
            mgLeft='0'
            bg='darkGreen'
            dir='row'
        >

        <TableGrid bg='darkRed' color='everWhite' fontSize='14' wdt='235' hgt='45' mgTop='-5' mgLeft='-5' fontFamily='regular'>
            <Text style={{ fontWeight: 'bold' }}>Adicionar</Text> {'\n'} novo horário/matéria</TableGrid>

            <AddButton
                wdt='95'
                hgt='45'
                bdRd='10'
                mgTop='-5'
                mgLeft='5'
                bg='darkRed'
                onPress={() => {
                    navigation.navigate('MonitorSchedule')
                }} />
        </ListContainer>
    </> 
    )
}