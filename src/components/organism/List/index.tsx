import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ContactText, InfoText, ListContainer, Photo, Subcontainer } from '~/components/atoms'
import { imageMap, defaultPhoto } from '~/../archives/photoMapper'

export const ListOfContacts: React.FC<{ navigation: any; list: any[] }> = ({ navigation, list }) => {

    return (       
        <FlatList 
            data={ list }
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({ item }) => (
        
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('ContactsDetail', {
                        id: item.id,
                        nome: item.nome,        
                        teams: item.teamsUser,   
                        idFoto: item.idFoto,      
                        email: item.teamsEmail,
                        tipo: item.tipo
                    })
                }}>
                <ListContainer mgLeft='0'>
                    
                <Photo 
                    source={imageMap[item.idFoto] ?? defaultPhoto} 
                />
                        <Subcontainer
                            mgTop='0'
                            bg='everWhite'
                            mgLeft='0'
                            justify='center'
                            hgt='48'
                            wdt='255'
                        >
                            <ContactText mgTop='-3'>
                                {item.nome}
                            </ContactText>

                            <InfoText mgTop='-3'>
                                {item.teamsUser}
                            </InfoText>
                            
                            <InfoText >
                                {item.teamsEmail}
                            </InfoText>

                        </Subcontainer>
                    
                </ListContainer>
            </TouchableOpacity>  
            )}
        />
    )
}