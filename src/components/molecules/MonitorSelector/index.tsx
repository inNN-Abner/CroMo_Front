import React, { useState } from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Divider, imageMap, ListOptionButton, PageSubtitle, Subcontainer } from '~/components/atoms'
import { useTheme } from '~/context/ThemeContext'
import { theme } from '~/styles'
import { useMonitors } from '~/../archives/monitors'

export const MonitorList = ({ onMonitorSelected }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const isDark = useTheme().isDark
  const monitors = useMonitors()

  const handleButtonPress = (id: number) => {
    setSelectedId(id)
    onMonitorSelected()
  }

  const getTextColor = (selected: boolean) =>
    isDark
      ? theme.darkTheme.colors[selected ? 'everWhite' : 'brisk']
      : theme.lightTheme.colors[selected ? 'everWhite' : 'brisk']

  return (
    <Subcontainer align='center' maxHgt='100' mgLeft='5' mgTop='0' bdRd='10' wdt='175'>

      <PageSubtitle
        children={'Monitores'}
        mgLeft='5'
        mgTop='0'
        pddLeft='0'
        fontSize='18'
      />

      <Divider />

      <ScrollView
        style={{ width: '100%' }} 
        contentContainerStyle={{ paddingVertical: 0 }}            
      >
        {monitors.map((item) => {
          const isSelected = selectedId === item.id
          const textColor = getTextColor(isSelected)

          return (
            <ListOptionButton
              key={item.id}
              onPress={() => handleButtonPress(item.id)}
              justify='flex-start'
              wdt='165'
              hgt='50'
              bdRd='5'
              mgLeft='5'
              mgTop='5'
              color={textColor}
              bg={isSelected ? 'darkRed' : 'white'}
              source={imageMap[Number(item.photo) || 1]}
              fontSize='14'
              labelComponent={
                <Text>
                  <Text style={{ fontWeight: 'bold', marginLeft: 5, color: textColor }}>
                    {item.name}
                  </Text>
                  {'\n'}
                  <Text style={{ color: textColor, marginLeft: 5 }}>
                    {item.materia}
                  </Text>
                </Text>
              }
            />
          )}
        )}
      </ScrollView>
    </Subcontainer>
  )
}