import React, { useState } from 'react'
import contacts from '~/../archives/contacts'
import { ListOfContacts } from '~/components/organism/List';
import { Container, Subcontainer } from '~/components/atoms/Container';
import { Headers, PageSubtitle, PageTitle, SearchInput, Windows } from '~/components/';

export const ContactsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [list, setList] = useState(contacts)

  return (
    <Container>
     <Headers />

      <PageTitle>Tela de contatos</PageTitle>
      <PageSubtitle>Lista de contatos</PageSubtitle>
        
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
            />

          </Windows>

          <ListOfContacts navigation={navigation} list={list} />

        </Windows>

      </Subcontainer>
    </Container>
  )
}