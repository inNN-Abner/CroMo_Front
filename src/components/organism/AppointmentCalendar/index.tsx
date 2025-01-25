
import { LocaleConfig } from 'react-native-calendars'
import { Calendar } from 'react-native-calendars'
import horarios from '~/../archives/hours'
import { useTheme } from '~/context/ThemeContext';
import { theme } from '~/styles';

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: "Hoje"
}

LocaleConfig.defaultLocale = 'pt-BR';

interface CalendarEvent {
  id: number
  data: string
}

const calendarEvents: CalendarEvent[] = horarios.map(item => ({
    id: item.id,
    data: item.date
}))
  
const getMarkedDates = () => {
  return horarios.reduce((acc: Record<string, any>, item) => {
    acc[item.date] = {
      customStyles: {
        container: { backgroundColor: '#7f0000', elevation: 5 },
        text: { color: 'white' },
      }
    }
    return acc
  }, {})
}

export const AppointmentCalendar = ({ navigation }) => {
  const { isDark } = useTheme()
  const markedDates = getMarkedDates()

  return (
    <Calendar

      style={{
        borderWidth: 0,
        height: 350,
        width: 325,
        borderRadius: 20,
        elevation: 10
      }}

      theme={{
        backgroundColor: theme.darkTheme.colors.darkGreen,
        calendarBackground: isDark ? theme.lightTheme.colors.brisk: theme.darkTheme.colors.darkGreen,
        todayTextColor: theme.lightTheme.colors.redDarkRed,
        dayTextColor: '#FFFFFF',
        textDisabledColor: '#696969',
        dotColor: '#BC191B',
        selectedDotColor: '#E2EAEE',
        arrowColor: theme.darkTheme.colors.darkRed,
        disabledArrowColor: '#D9E1E8',
        monthTextColor: '#FF3131',
        indicatorColor: '#7F0000',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
      }}

      markingType={'custom'}
      markedDates={markedDates}
      onDayPress={() => {
        navigation.navigate('Monitoring')
      }}
    />
  )
}