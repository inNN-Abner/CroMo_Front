import styled from 'styled-components/native'

export const TextInputStyle = styled.TextInput
    <{ bgColor?: string; color?: string; wdt?: string; hgt?: string; pddLeft?: string; mgTop?: string; mgLeft?: string }>
`
    backgroundColor: ${({ bgColor, theme }) => theme.colors[bgColor || 'white']};
    color: ${({ color, theme }) => theme.colors[color || 'brisk']};
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '325px')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '50px')};
    paddingLeft: ${({ pddLeft, theme }) => theme.metrics.px([pddLeft || 20])}px;
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 20])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 10])}px;
    borderRadius: 50px;
    borderWidth: 0;
    elevation: 15;
`
