import React, { useContext } from 'react'
import monitoringHours from '~/../archives/monitoringHours'
import { FlatList, Text } from 'react-native'
import { AddButton, EditButton, ListContainer, Subcontainer, TrashButton } from '~/components/atoms'
import { IconTableGrid, TableGrid } from '~/components/molecules/Grid'
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

    function formatWeekDay(day: string): string {
    const map: Record<string, string> = {
        "segunda-feira": "SEG",
        "terça-feira": "TER",
        "quarta-feira": "QUA",
        "quinta-feira": "QUI",
        "sexta-feira": "SEX",
        "sábado": "SAB",
    }
    return (map[day.toLowerCase()]) || day
    }

    return (
      <>
        <FlatList
          data={monitorias}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>  (
            <ListContainer mgTop='-3' mgLeft='00' bg='darkGreen' dir='row'>
              <TableGrid fontSize='16' color='white'>{formatWeekDay(item.dia_semana.toString())}</TableGrid>
              
            <Subcontainer bg='gray' wdt='100' hgt='50' pdd='0' mgLeft='5' mgTop='5' bdRd='5' >
              <IconTableGrid fontSize='14' color='white' wdt='220' fontFamily='regular' align='flex-start' mgTop='0' mgLeft='10' bdRd='5'
                local = {' Local: ' + item.local + '\n' || 'Local não definido'}
                hour ={' Horário: ' + item.horario || 'Horário não definido'}
            />
            </Subcontainer>

            </ListContainer>
          )}
        />
      </>
    )
  }  