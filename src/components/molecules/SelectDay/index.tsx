import React, { useState } from 'react'
import { SelectDayContainer, DayButton } from '../../atoms'

export const SelectDay = () => {
    const [indexDate, setIndexDate] = useState<number | null>(null)
    const handleButtonPress = (index: number) => {
        setIndexDate(index)
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