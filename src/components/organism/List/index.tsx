import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ContactText, InfoText, Listcontainer, Photo, Subcontainer } from '~/components/atoms'

export const ListOfContacts: React.FC<{ navigation: any; list: any[] }> = ({ navigation, list }) => {

    return (       
        <FlatList data={ list }
            keyExtractor={(item) => item.id.toString()} 
            renderItem={({ item }) => (
        
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('ContactsDetail', {
                        id: item.id,
                        name: item.name,
                        info: item.info,
                        photo: item.photo,
                        type: item.type,
                        email: item.email,
                        teams: item.teams
                    })
                }}>
                <Listcontainer>
                    
                    <Photo
                        source={item.photo}/>

                        <Subcontainer
                            mgTop='0'
                            bg='everWhite'
                            mgLeft='0'
                            justify='center'
                            hgt='48'
                            wdt='255'
                        >
                            <ContactText  mgTop='-3'>
                                {item.name}
                            </ContactText>

                            <InfoText mgTop='-3'>
                                {item.teams}
                            </InfoText>
                            
                            <InfoText >
                                {item.email}
                            </InfoText>

                        </Subcontainer>
                        
                </Listcontainer>
            </TouchableOpacity>  
            
            )}
        />

    )
}