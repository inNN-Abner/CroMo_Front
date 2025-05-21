import React, { useContext } from 'react'
import monitoringHours from '~/../archives/monitoringHours'
import { FlatList, Text } from 'react-native'
import { AddButton, EditButton, ListContainer, TrashButton } from '~/components/atoms'
import { TableGrid } from '~/components/molecules/Grid'
import { useUser } from '~/services/userContext'


export const ContactsDetailGrid = ({ navigation }) => {
    const { user } = useUser()

    return (
    <>
    <FlatList data={ monitoringHours } renderItem={({ item }) => (

            <ListContainer
                mgTop='-3'
                mgLeft='00'
                bg='darkGreen'
                dir='row'
            >
                <TableGrid fontSize='11' color='white'>{item.weekDay}</TableGrid>
                <TableGrid fontSize='14' wdt='140' fontFamily='regular'>
                    <Text style={{ fontWeight: 'bold' }}>{item.locale}</Text> {`\n`} {item.hour}</TableGrid>
                <EditButton 
                    bg='white'
                    onPress={() => {
                    navigation.navigate('MonitorSchedule', {
                        id: item.id,
                        diaSemana: item.weekDay,
                        horario: item.hour,
                        modalidae: item.locale
                    })                    
                }}
                    label={''}
                    wdt='45'
                    hgt='50'
                    bdRd='10'
                    mgTop='3'
                    mgLeft='5'
                />

                <TrashButton
                    label={''}
                    wdt='45'
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
        
        {user?.tipo === 'monitor' && (
            <ListContainer
                mgTop='0'
                mgLeft='0'
                bg='darkGreen'
                dir='row'
            >
            
            <TableGrid bg='darkRed' color='everWhite' fontSize='14' wdt='220' hgt='45' mgTop='-5' mgLeft='3' fontFamily='regular'>
                <Text style={{ fontWeight: 'bold' }}>Adicionar</Text> {'\n'} novo horário</TableGrid>

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
            )}
        </>
    )
}

export const ClassDetailGrid = ({ monitorias, navigation }) => {
    const { user } = useUser()

    return (
      <>
        <FlatList
          data={monitorias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListContainer mgTop='-3' mgLeft='00' bg='darkGreen' dir='row'>
              <TableGrid fontSize='11' color='white'>{item.diaSemana}</TableGrid>
              
              <TableGrid fontSize='14' wdt='140' fontFamily='regular'>
                <Text style={{ fontWeight: 'bold' }}>{item.local?.nome || 'Local não definido'}</Text>{'\n'}
                {item.horario}
              </TableGrid>
            </ListContainer>
          )}
        />
      </>
    )
  }  