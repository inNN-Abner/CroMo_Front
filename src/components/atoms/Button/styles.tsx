import styled from 'styled-components/native'

export const StyledButtonStyle = styled.TouchableOpacity
<{ source?: string; bg?: string; color?: string; align?: string; justify?: string; dir?: string; wdt?: string; hgt?: string; mgTop?: string; mgLeft?: string; mgRight?: string; bdRd?: string }>
`
    source: ${({ source }) => source || 'Edit'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
    color: ${({ color, theme }) => theme.colors[color || 'everWhite']};
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
    flexDirection: ${({ dir }) => dir || 'column'};
    width: ${({ wdt }) => (wdt ? (wdt) : '165px')};
    height: ${({ hgt }) => (hgt ? (hgt) : '52px')};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 20])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
    marginRight: ${({ mgRight, theme }) => theme.metrics.px([mgRight || 0])}px;
    border-radius: ${({ bdRd, theme }) => theme.metrics.px([bdRd || 50])}px;
`

export const ButtonTextStyle = styled.Text
<{ color?: string; ftSz?: string; mgLeft?: string; }>
`
    color: ${({ color, theme }) => theme.colors[color || 'everWhite']};
    font-family: 'PTSans_400Regular';
    font-size: ${({ ftSz, theme }) => (ftSz ? `${theme.metrics.px(ftSz)}px` : `${theme.metrics.px(20)}px`)};
    font-weight: bold;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
`