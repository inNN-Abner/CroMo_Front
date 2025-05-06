import React, { useEffect, useState } from 'react'
import { CancelButton, CreateModal, InfoTextNoWrap, PageSubtitle, PageTitle, PDFButton, Photo, StylezedButton, Subcontainer, ViewButton, Windows } from '~/components'
import { imageMap, defaultPhoto } from '~/../archives/photoMapper'
import { ScrollView } from 'react-native-gesture-handler'
import { useAgendamento } from '~/../archives/monitoringHours'
import { useAgendaActions } from '~/services/useAgendaActions'
import { useUserSchedule } from '~/services/useLoadUserSchedule'
import * as SecureStore from 'expo-secure-store'
import * as Print from 'expo-print'
import * as Sharing from 'expo-sharing'
import { API_URL } from '~/configs/config'
import HTMLListaPresenca from '~/services/HTMLListaPresenca'

const Calendar = require('~/../assets/Calendar.png')
const Clock = require( '~/../assets/Clock.png')

export const SummarySchedule = ({ navigation }) => {
    const { agendas, loading, error, loadUserSchedule } = useUserSchedule()
    const { handleDelete, handleSubmit } = useAgendaActions(loadUserSchedule)  
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [titleMessage, setTitleMessage] = useState('')
    const [bodyMessage, setBodyMessage] = useState('')
    const [selectedMonitoria, setSelectedMonitoria] = useState(null)
    const { monitoring, isLoaded } = useAgendamento()
    const [userType, setUserType] = useState(null)
    const [alunos, setAlunos] = useState([])
    const [dataAgendamento, setDataAgendamento] = useState(null)
    const [materia, setMateria] = useState(null)
    console.log("monitoring", monitoring)
    useEffect(() => {
        const loadUserType = async () => {
          try {
            const userData = await SecureStore.getItemAsync('user')
            const userJson = userData ? JSON.parse(userData) : null
            if (userJson) {
              setUserType(userJson.tipo)
            }
          } catch (error) {
            console.error('Erro ao carregar dados do usuário:', error)
          }
        }
    
        loadUserType()
      }, [])

    function handleOnPress() {
        setOpenCreateModal(!openCreateModal)
    }

    const excluirMonitoria = async() => {
        const token = await SecureStore.getItemAsync('token')

        if (!selectedMonitoria) {
        console.log("Faltam dados para desmarcar agendamento")
        return
        }
        
        try {
        console.log("Enviando para API:", {
            idMonitoria: selectedMonitoria,
        })
        
        const response = await fetch(`${API_URL}/agendamento/delete`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'x-access-token': token || ''
            },
            body: JSON.stringify({
            id:  Number(selectedMonitoria),
            })
        })
    
        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(errorText || 'Erro ao apagar agendamento!')
        }

        const result = await response.json().catch((error) => {
            console.error("Erro ao fazer parse da resposta JSON:", error)
            throw new Error('Erro ao processar a resposta da API')
        })

        console.log("Resposta:", result)

        if (!result) {
            alert("Resposta inválida da API.")
            return
        }
    
        navigation.navigate('Monitoring')

        } catch (error) {
        console.error("Erro ao agendar:", error)
        }
    }

    const gerarPDF = async() => {
        if (!alunos || alunos.length === 0) {
            alert('Nenhum aluno encontrado.')
            return
    }
    
    const html = HTMLListaPresenca(materia, dataAgendamento, alunos)

    const { uri } = await Print.printToFileAsync({ html })
        if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(uri)
        } else {
            alert('Compartilhamento não está disponível no dispositivo.')
        }
    }

    const consultarAlunos = async (monitoriaId) => {
        const token = await SecureStore.getItemAsync('token')
        
        if (!monitoriaId) {
            console.log("Faltam dados para visualizar agendamento")
            return null
        }
        
        try {
            console.log("Enviando para API:", { idMonitoria: monitoriaId })
        
            const response = await fetch(`${API_URL}/agendamento/alunosAgendados`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token || ''
            },
            body: JSON.stringify({ id: Number(monitoriaId) })
            })
        
            if (!response.ok) {
            const errorText = await response.text()
            throw new Error(errorText || 'Erro ao visualizar agendamento!')
            }
        
            const result = await response.json()
            console.log("Resposta da API:", result)
            return result
        } catch (error) {
            console.error("Erro ao visualizar:", error)
            return null
        }
    }

    const CreateModalCancel = (monitoria) => {
        setSelectedMonitoria(monitoria)
        setTitleMessage('Desmarcar monitoria')
        setBodyMessage('Tem certeza que deseja cancelar o\nagendamento? Essa ação é irreversível!')
        handleOnPress()
    }

    const CreateModalStudents = async (monitoriaId, materiaItem) => {
        setOpenCreateModal(false) // Garante que ele feche antes de abrir de novo
        setSelectedMonitoria(monitoriaId)
        setMateria(materiaItem)
        setAlunos([]) // Evita visualização anterior
      
        const result = await consultarAlunos(monitoriaId)
        if (!result || result.length === 0) {
          alert('Nenhum aluno encontrado.')
          return
        }
      
        setAlunos(result)
        setDataAgendamento(result[0].data)
        setTitleMessage('Lista de alunos')
        setBodyMessage(result.map(aluno => `${aluno.nome} - RA: ${aluno.ra}`).join('\n'))
        setOpenCreateModal(true)
      }

    if ((userType == "Aluno" || userType == "Monitor") && monitoring.length === 0){
        return <>
            <Subcontainer bg='darkRed' mgLeft='0' mgTop='60' wdt='250' hgt='40' align='center' justify='center' pdd='0'>
                <InfoTextNoWrap color='everWhite' alignSelf='center' fontSize='20'>
                    Não há agendamentos! 
                </InfoTextNoWrap>
            </Subcontainer>
        </>
    }
    else if (userType == "Aluno"){return (
    <Subcontainer mgLeft='0' maxHgt='75' align='center' >
    <ScrollView>

        {monitoring.map((item) => (
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
                        source={imageMap[item.icon || 1]} 
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
                source={imageMap[item.photo || 1]}
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
                onPress={() => CreateModalCancel(item.id)}
            />
        </Subcontainer>
        </Windows>
        </React.Fragment>
        ))}

        <CreateModal visible={openCreateModal && materia && alunos.length > 0} bg='white' bdRd='10' wdt='300' hgt='158' pdd='0'>

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
                        excluirMonitoria()
                        loadUserSchedule()
                        handleOnPress()
                       // navigation.navigate('Monitoring')
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
    )}
    else{return (
    <Subcontainer mgLeft='0' maxHgt='75' align='center' >
    <ScrollView>

        {monitoring.map((item) => (
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
                        source={imageMap[item.icon || 1]} 
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
            <PageSubtitle color='everWhite'>
                {item.quantidade}
            </PageSubtitle>

        </Subcontainer>

        <Subcontainer mgLeft='0' mgTop='5' bg='darkGreen' dir='row' maxHgt='27' bdRd='0' justify='flex-end'>
            <ViewButton
                bg='everWhite'
                wdt='200'
                hgt='40'
                mgTop='5'
                mgRight='5'
                bdRd='15'
                color='darkRed'
                label={'Visualizar'}
                fontSize='16'
                onPress={() => {
                    CreateModalStudents(item.id, item.class)
                }}
            />
        </Subcontainer>
        </Windows>
        </React.Fragment>
        ))}

        <CreateModal visible={openCreateModal && materia && alunos.length > 0} bdRd='10' wdt='300' hgt='300' align='flex-end' justify='flex-start' pdd='0' bg='white'>
        
        <Subcontainer bg='white' align='center' justify='center' maxHgt='15' mgTop='0'>
            <PageTitle color='brisk' fontSize='20'>{titleMessage}</PageTitle>
        </Subcontainer>

        <Subcontainer
            bg='white'
            align='flex-start'
            justify='flex-start'
            hgt='180'
            mgTop='5'
            pdd='10'
        >
            <ScrollView>
            {alunos.length > 0 ? (
                alunos.map((aluno, index) => (
                <PageSubtitle
                    key={index}
                    color='brisk'
                    fontSize='14'
                    mgBottom='5'
                    children={`${aluno.nome} - RA: ${aluno.ra}`}
                />
                ))
            ) : (
                <PageSubtitle color='brisk' fontSize='14'>
                    Nenhum aluno encontrado.
                </PageSubtitle>
            )}
            </ScrollView>
        </Subcontainer>

        <Subcontainer
            bg='white'
            dir='row-reverse'
            justify='center'
            align='center'
            mgLeft='0'
            maxHgt='15'
            mgTop='15'
            pdd='0'
        >
        <PDFButton
            label='Lista'
            bg='darkRed'
            color='everWhite'
            wdt='140'
            hgt='40'
            bdRd='10'
            mgTop='0'
            fontSize='16'
            onPress={gerarPDF}
        />

        <StylezedButton
            label='Fechar'
            bg='white'
            color='darkRed'
            wdt='140'
            hgt='40'
            bdRd='10'
            fontSize='16'
            mgTop='0'
            onPress={handleOnPress}
            mgRight='10'
        />
        </Subcontainer>

        </CreateModal>
    </ScrollView>
    </Subcontainer>
    )}
}