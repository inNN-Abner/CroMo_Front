import React, { useEffect, useState } from 'react'
import {useMonitoring} from '~/../archives/monitoring'
import { FlatList, Text } from 'react-native'
import { imageMap, InfoText, ListContainer, Photo, Subcontainer, Windows } from '~/components/atoms'
import { TableGrid } from '~/components/molecules'

export const HomeGrid = () => {
    const monitoring = useMonitoring()
    return (
        <Subcontainer 
        hgt='250'
        wdt='360'
        align='center'
        mgTop='35'
        mgLeft='0'
        bg='white'>

        <Windows 
            bg='darkRed'
            hgt='40'
            wdt='355'
            bdRdBL='0'
            bdRdBR='0'
            justify='flex-start'
            mgTop='3'
            >
            <InfoText
                color='everWhite'
                mgLeft='20'
                mgTop='5'
                fontSize='18'
                fontFamily='bold'
            >
                {'Lembretes e avisos'}
            </InfoText>
        </Windows>

            <Windows
                dir='column'
                justify='center'
                align='center'
                mgTop='-5'
                bdRdTL='0'
                bdRdTR='0'
                wdt='355'
                hgt='205'
                bg='briskGray'
            >
                <FlatList data={ monitoring } renderItem={({ item }) => (

                        <ListContainer
                            mgTop='0'
                            mgLeft='0'
                            bg='brisk'
                            dir='column'
                            align='center'
                            justify='flex-start'
                            wdt='350'
                            hgt='157'
                        >

                            <TableGrid 
                                align='flex-start'
                                wdt='335'
                                hgt='40'
                                mgLeft='0' 
                                fontSize='15'
                                mgTop='10'
                                bdRd='10'
                                pddLeft='10'
                                color='brisk'
                                bg='white'
                            >
                                    {item.class}
                                </TableGrid>

                            <TableGrid 
                                fontSize='14'
                                wdt='335'
                                mgTop='5'
                                mgLeft='0'
                                hgt='100'
                                bdRd='10'
                                align='flex-start'
                                pdd='10'
                                pddLeft='10'
                                fontFamily='bold'
                                txtAlign='flex-start'
                                bg='gray'
                            >
                                {item.info}
                            </TableGrid>

                        </ListContainer>
                    )}
                    >
                    </FlatList>
            </Windows>
    </Subcontainer>
    )
}

export const ClassGrid = () => {
    const today = new Date().toLocaleDateString('pt-BR', { weekday: 'long', timeZone: 'America/Sao_Paulo' })
    const monitoring = useMonitoring()
    return (
    <Subcontainer 
        hgt='200'
        wdt='360'
        align='center'
        mgTop='0'
        mgLeft='0'
        bg='white'>

        <Windows 
            bg='darkRed'
            hgt='40'
            wdt='355'
            bdRdBL='0'
            bdRdBR='0'
            justify='flex-start'
            mgTop='3'
            >
            <InfoText
                color='everWhite'
                mgLeft='20'
                mgTop='5'
                fontSize='18'
                fontFamily='bold'
            >
                {today.charAt(0).toUpperCase() + today.slice(1)}
            </InfoText>

            </Windows>

            <Windows
                dir='row'
                justify='center'
                align='center'
                mgTop='-5'
                bdRdTL='0'
                bdRdTR='0'
                wdt='355'
                hgt='160'
                bg='briskGray'
            >
                <FlatList data={ monitoring } renderItem={({ item }) => (

                    <ListContainer
                        mgTop='0'
                        mgLeft='0'
                        bg='briskGray'
                        dir='row'
                        align='center'
                        justify='flex-start'
                        wdt='160'
                        hgt='65'
                    >
                
                    <Subcontainer dir='row' bg='white' wdt='175' hgt='55' align='center' bdRd='10' mgLeft='5' mgTop='10'>
                        <Photo
                            hgt='35'
                            wdt='37'
                            mgLeft='3'
                            source={item.photo}
                        />

                        <TableGrid 
                            pdd='5'
                            align='flex-start'
                            wdt='125'
                            hgt='50'
                            mgLeft='3' 
                            fontSize='14'
                            mgTop='0'
                            color='brisk'
                            bg='white'
                            fontFamily='bold'
                        >
                            {item.monitorName}
                        </TableGrid>
                    </Subcontainer>
                        
                    <Subcontainer dir='row' bg='gray' wdt='165' hgt='55' align='center' bdRd='10' mgLeft='5' mgTop='10'>
                        <Photo
                            hgt='30'
                            wdt='35'
                            mgLeft='3'
                            source={item.icon}/>
                        
                        <TableGrid
                            fontSize='13'
                            wdt='125'
                            hgt='55'
                            mgTop='0'
                            mgLeft='0'
                            bdRd='10'
                            align='flex-start'
                            pddLeft='5'
                            fontFamily='regular'
                        >
                            <Text style={{ fontWeight: 'bold' }}>{item.class}</Text> {'\n'} {item.info}
                        </TableGrid>
                    </Subcontainer>

                    </ListContainer>
                )}
                >
                </FlatList>
        </Windows>
    </Subcontainer>
    )
}