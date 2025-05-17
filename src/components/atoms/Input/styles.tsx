import { TextInputMask } from 'react-native-masked-text'
import styled from 'styled-components/native'

export const TextInputStyle = styled.TextInput
    <{ bgColor?: string; align?: string; mtline?: string; placeColor?: string; color?: string; fontFamily?: string; bdRd?: string; fontSize?: string; wdt?: string; hgt?: string; pddLeft?: string; mgTop?: string; mgLeft?: string; wrap?: string }>
`
    backgroundColor: ${({ bgColor, theme }) => theme.colors[bgColor || 'white']};
    color: ${({ color, theme }) => theme.colors[color || 'brisk']};
    placeholderTextColor: ${({ placeColor, theme }) => theme.colors[placeColor || 'gray']};
    textAlign: ${({ align }) => align || 'flex-start'};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(12)}px`)};
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '325px')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '50px')};
    paddingLeft: ${({ pddLeft, theme }) => theme.metrics.px([pddLeft || 20])}px;
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 20])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 10])}px;
    borderRadius: ${({ bdRd, theme }) => theme.metrics.px([bdRd || 50])}px;
    multiline: ${({ mtline }) => mtline || 'true'};
    flexWrap: ${({ wrap }) => wrap || 'nowrap'};
    borderWidth: 0;
    elevation: 15;
`

export const TimeInputStyle = styled(TextInputMask)
    <{ bgColor?: string; color?: string; placeholderColor?: string; alignSelf?: string; wdt?: string; hgt?: string; pddLeft?: string; mgTop?: string; mgLeft?: string }>
`
    backgroundColor: ${({ bgColor, theme }) => theme.colors[bgColor || 'white']};
    text-align: center;
    width: ${({ wdt, theme }) => theme.metrics.px([wdt || 110])};
    height: ${({ hgt, theme }) => theme.metrics.px([hgt || 50])};
    paddingLeft: ${({ pddLeft, theme }) => theme.metrics.px([pddLeft || 20])}px;
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 20])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
    borderRadius: 20px;
    borderWidth: 0;
    elevation: 15;
`
