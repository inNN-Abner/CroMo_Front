import styled from 'styled-components/native'

export const StyledButtonStyle = styled.TouchableOpacity
<{ source?: string; bg?: string; color?: string; align?: string; justify?: string; dir?: string; wdt?: string; hgt?: string; mgTop?: string; mgLeft?: string; mgRight?: string; bdRd?: string; bdWdt?: string; bdColor?: string }>
`
    source: ${({ source }) => source || 'Edit'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
    color: ${({ color, theme }) => theme.colors[color || 'everWhite']};
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
    flexDirection: ${({ dir }) => dir || 'column'};
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(165)}px`)};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : `${theme.metrics.px(52)}px`)};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 20])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
    marginRight: ${({ mgRight, theme }) => theme.metrics.px([mgRight || 0])}px;
    border-radius: ${({ bdRd, theme }) => theme.metrics.px([bdRd || 50])}px;
    border-width: ${({ bdWdt }) => bdWdt || '0px'};
    border-color: ${({ bdColor, theme }) => theme.colors[bdColor || 'darkRed']};
`

export const ButtonTextStyle = styled.Text
<{ color?: string; fontSize?: string; mgTop?: string; mgLeft?: string; }>
`
    color: ${({ color, theme }) => theme.colors[color || 'everWhite']};
    font-weight: bold;
    font-family: 'PTSans_400Regular';
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(20)}px`)};
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 0])}px;
`

export const ThemeButtonStyle = styled.TouchableOpacity
<{ color?: string; align?: string; justify?: string; bg?: string; ftSz?: string; wdt?: string; hgt?:string; mgLeft?: string; mgTop?: string; bdRd?: string }>
`
    background-color: ${({ bg, theme }) => theme.colors[bg || 'blueYellow']};
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(50)}px`)};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : `${theme.metrics.px(50)}px`)};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 5])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 10])}px;
    border-radius: ${({ bdRd, theme }) => theme.metrics.px([bdRd || 15])}px;
`