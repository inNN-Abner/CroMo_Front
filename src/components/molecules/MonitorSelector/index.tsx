import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Divider, imageMap, InfoText, ListOptionButton, PageSubtitle, Subcontainer } from '~/components/atoms'
import { useTheme } from '~/context/ThemeContext'
import { theme } from '~/styles'
import { useMonitors } from '~/../archives/monitors'
import { API_URL } from '~/configs/config'

export const MonitorList = ({ onMonitorSelected, filterWeekday }) => {
  const [monitorias, setMonitorias] = useState([]);
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const { monitors, loading, error } = useMonitors()
  const isDark = useTheme().isDark
  
  useEffect(() => {
    async function fetchMonitorias() {
      // busca monitorias normalmente
      const response = await fetch(`${API_URL}/monitorias`)
      const data = await response.json()

      if (filterWeekday) {
        // filtra as que batem com o dia da semana da data selecionada
        const filtradas = data.filter(m => m.dia_semana === filterWeekday)
        setMonitorias(filtradas)
      } else {
        setMonitorias(data)
      }
    }
    fetchMonitorias()
  }, [filterWeekday])

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
              onPress={() => {
                setSelectedId(item.id)  
                onMonitorSelected(item.id)
              }}
              justify='flex-start'
              wdt='165'
              hgt='50'
              bdRd='5'
              mgLeft='5'
              mgTop='5'
              color={textColor}
              bg={isSelected ? 'darkRed' : 'white'}
              source={imageMap[item.photo || 1]}
              fontSize='14'
              labelComponent={
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{ marginLeft: 5 }}
                >
                  <Text style={{ fontWeight: 'bold', color: textColor }}>
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