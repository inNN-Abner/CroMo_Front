import styled from 'styled-components/native'

export const DefineModal = styled.View
<{ bg?: string; align?: string; justify?: string; wdt?: string; mgLeft?: string; hgt?: string; bdRd?: string; pdd?: string }>`
    margin: 50px;
    border-radius: ${({ bdRd, theme }) => theme.metrics.px([bdRd || 20])}px;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
    width: ${({ wdt, theme }) => (wdt ? (theme.metrics.px(wdt)) : '90%')};
    height: ${({ hgt, theme }) => (hgt ? (theme.metrics.px(hgt)) : '55%')};
    padding: ${({ pdd, theme }) => theme.metrics.px([pdd || 10])}px;
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
`