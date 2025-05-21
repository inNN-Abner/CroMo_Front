import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '~/configs/config'
import { ListOfClass } from '~/components/organism/List'
import { Container, Subcontainer } from '~/components/atoms/Container'
import { Headers, PageSubtitle, PageTitle, SearchInput, Windows } from '~/components/'
import * as SecureStore from 'expo-secure-store'

export const ClassListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [originalList, setOriginalList] = useState<any[]>([])
  const [list, setList] = useState<any[]>([])
  
  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const token = await SecureStore.getItemAsync("token")
        const response = await axios.get(`${API_URL}/materias`, {
          headers: {
            'x-access-token': token || ''
          }
        })
  
        setOriginalList(response.data)
        setList(response.data)
      } catch (error) {
        console.error('Erro ao buscar matérias:', error)
      }
    }
  
    fetchMaterias()
  }, []) 

  return (
    <Container>
     <Headers />

      <PageTitle>Tela de matérias</PageTitle>
      <PageSubtitle>Lista de matérias de monitorias</PageSubtitle>
        
      <Subcontainer align='center' mgLeft='0' maxHgt='77'>

        <Windows
          mgTop='20'
          bg='greenBlack'
          dir='column'
        >

          <Windows
            mgTop='0'
            wdt='338'
            hgt='55'
            bdRdBL='0'
            bdRdBR='0'
            bg='greenWhite'
            dir='column'
          >
            <SearchInput 
              mgTop='12'
              mgLeft='10'
              bgColor='brisk'
              placeholder='Pesquisar por nome'
              color='white'
              wdt='315'
              hgt='35'
              setList={setList}
              originalList={originalList}
            />

          </Windows>

          <Subcontainer
            align='center' bg='greenBlack'
            mgLeft='0' mgTop='0'
            maxHgt='87'
          >
            <ListOfClass 
              navigation={navigation} 
              list={list}
            />
          </Subcontainer>

        </Windows>

      </Subcontainer>
    </Container>
  )
}