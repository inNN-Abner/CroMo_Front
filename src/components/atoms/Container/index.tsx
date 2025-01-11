import styled from 'styled-components/native'

export const Container = styled.SafeAreaView
<{ bg?: string; dir?: string; align?: string; justify?: string; wdt?: string; hgt?: string }>
`
    flex: 1;
    display: flex;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'brisk']};
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
`

export const Subcontainer = styled.SafeAreaView
<{ bg?: string; dir?: string; align?: string; justify?: string; mgTop?: string; mgLeft?: string; wdt?: string; hgt?: string; maxHgt?: string }>
`
    display: flex;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'brisk']};
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 10])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 10])}px;
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
    max-height: ${({ maxHgt }) => (maxHgt ? `${(maxHgt)}%` : '100%')};
`

export const ListContainer = styled.SafeAreaView
<{ dir?: string; bg?: string; align?: string; justify?: string; mgTop?: string; mgLeft?: string; wdt?: string; hgt?: string; bdRd?: string }>
`
    display: flex;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'everWhite']};
    flex-direction: ${({ dir }) => dir || 'row'};
    align-items: ${({ align }) => align || 'center'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 10])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 8])}px;
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(320)}px`)};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : `${theme.metrics.px(60)}px`)};
    border-radius: ${({ bdRd, theme }) => (bdRd ? `${theme.metrics.px(bdRd)}px` : `${theme.metrics.px(10)}px`)};
`