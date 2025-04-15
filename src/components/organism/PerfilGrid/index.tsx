import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import { AddButton, InfoText, ListContainer, PageSubtitle, PageTitle, StylezedButton, Subcontainer, TrashButton } from '~/components/atoms'
import { CreateModal } from '~/components/molecules'
import { TableGrid } from '~/components/molecules/Grid'
import { useAgendaActions } from '~/services/useAgendaActions'
import { useUserSchedule } from '~/services/useLoadUserSchedule'

export const PerfilGrid = ({ navigation }) => {

    const { agendas, loading, error, loadUserSchedule } = useUserSchedule()
    const { handleDelete, handleSubmit } = useAgendaActions(loadUserSchedule)
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
    const [openCreateModal, setOpenCreateModal] = useState(false)

    function handleOnPress() {
        setOpenCreateModal(!openCreateModal)
    }
    
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
                onPress={() => {
                    setSelectedItemId(item.id)
                    handleOnPress()
                }}
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
    
        <CreateModal visible={openCreateModal} bg='white' bdRd='10' wdt='300' hgt='158' pdd='0'>

            <PageTitle color='brisk' mgTop='-10' mgLeft='0' fontSize='20' >{'Apagar matéria'}</PageTitle>
            <PageSubtitle color='brisk' fontSize='15' mgLeft='5' alignSelf='center' >{'Tem certeza que deseja apagar essa matéria? A ação é irreversíel!'}</PageSubtitle>
            
            <Subcontainer dir='row-reverse' bg='brisk' mgLeft='0' justify='center' align='center' maxHgt='0' mgTop='25'>
                <StylezedButton
                    label={'Apagar matéria'}
                    bg='darkRed'
                    mgTop='27'
                    wdt='140'
                    hgt='40'
                    bdRd='10'
                    fontSize='16'
                    onPress={async () => {
                        if (selectedItemId !== null) {
                          await handleDelete(selectedItemId)
                          handleOnPress()
                        }
                        console.log(selectedItemId)
                    }}
                />
                <StylezedButton
                    label={'Cancelar'}
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
        </> 
    )
}
