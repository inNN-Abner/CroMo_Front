import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { API_URL } from '~/configs/config'
import { Container, Windows, Subcontainer, HeaderText, Headers, PageTitle, PageSubtitle, ContactsDetailGrid, InfoCard, ClassDetailGrid } from '../../components'

export const ClassDetailScreen = ({ route, navigation }) => {
  const { materiaId } = route.params
  const [monitorias, setMonitorias] = useState([])

  useEffect(() => {
    const fetchMonitorias = async () => {
    console.log("ID da matéria:", materiaId)
      try {
        const token = await SecureStore.getItemAsync('token')
        const response = await axios.get(`${API_URL}/materias/${materiaId}/monitorias`, {
          headers: {
            'x-access-token': token || '',
          }
        })
        setMonitorias(response.data)
      } catch (error) {
        console.error('Erro ao buscar monitorias:', error)
      }
    }

    fetchMonitorias()
  }, [materiaId])

  return (
    <Container>
      <Headers />
      <PageTitle color='greenWhite'>Matéria</PageTitle>
      <PageSubtitle color='greenWhite'>Informações da monitoria</PageSubtitle>

      <Subcontainer align='center' mgLeft='0' mgTop='0' maxHgt='85'>
        <Windows bg='darkGreen' align='center' justify='flex-start' dir='column'>
          <InfoCard route={route} />

          <HeaderText mgTop='5' mgLeft='12' color='lightGray' fontSize='16'>
            Detalhes da monitoria
          </HeaderText>

          <Windows bg='everWhite' align='flex-start' dir='column' mgTop='10'>
            {monitorias.length === 0 ? (
              <HeaderText mgLeft='10' color='lightGray'>
                Nenhuma monitoria encontrada.
              </HeaderText>
            ) : (
                <ClassDetailGrid monitorias={monitorias} navigation={navigation}/>
            )}
          </Windows>
        </Windows>
      </Subcontainer>
    </Container>
  )
}