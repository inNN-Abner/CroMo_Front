import React, { useState } from 'react'
import { SelectDayContainer, DayButton } from '../../atoms'
import * as SecureStore from 'expo-secure-store'



export const diaSemana = async(index: number) => {
    const diasDaSemana = [
    "Segunda-feira", "Terça-feira","Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado" ]
    await SecureStore.setItemAsync('semana', diasDaSemana[index])
}

export const SelectDay = () => {
    const [indexDate, setIndexDate] = useState<number | null>(null) 
    const handleButtonPress = (index: number) => {
        setIndexDate(index)
        diaSemana(index)
    }

    return (
        <SelectDayContainer >
            {['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'].map((day, index) => (
                <DayButton 
                    key={index}
                    label={day}
                    color={indexDate === index ? 'white' : 'brisk'}
                    bg={indexDate === index ? 'darkRed' : 'white'}
                    onPress={() => handleButtonPress(index)}
                />
            ))}
        </SelectDayContainer>
    )
}