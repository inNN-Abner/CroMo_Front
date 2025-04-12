import React from 'react'
import { FlatList, Text } from 'react-native'
import { AddButton, InfoText, ListContainer, TrashButton } from '~/components/atoms'
import { TableGrid } from '~/components/molecules/Grid'
import { useUserSchedule } from '~/services/useUserScheduleHooks'

export const PerfilGrid = ({ navigation }) => {

    const { agendas, loading, error } = useUserSchedule()

    if (loading) return <InfoText color='white' alignSelf='center' mgTop='100' fontSize='16'>Carregando...</InfoText>
    if (error) return <InfoText color='white' alignSelf='center' mgTop='100' fontSize='16'>{error}</InfoText>

    return (
    <>
    <FlatList
        data={ agendas }     
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (

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
                label={''}
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
                    navigation.navigate('AddClass')
                }} />
        </ListContainer>
    </> 
    )
}