import React, { useState } from 'react'
import { SelectDayContainer, DayButton } from '../../atoms'

type SelectDayProps = {
    onDaySelected: (day: string) => void
}

export const SelectDay: React.FC<SelectDayProps> = ({ onDaySelected }) => {
    const [indexDate, setIndexDate] = useState<number | null>(null)

    const diasDaSemana = [
        "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"
    ]

    const handleButtonPress = (index: number) => {
        setIndexDate(index)
        onDaySelected(diasDaSemana[index])
    }

    return (
        <SelectDayContainer>
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