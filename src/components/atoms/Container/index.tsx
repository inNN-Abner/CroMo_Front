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
<{ bg?: string; wrap?: string; dir?: string; align?: string; justify?: string; mgTop?: string; mgLeft?: string; wdt?: string; hgt?: string; maxHgt?: string; bdRd?: string }>
`
    display: flex;
    flexWrap: ${({ wrap }) => wrap || 'nowrap'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'brisk']};
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: ${({ align }) => align || 'flex-start'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 10])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 10])}px;
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
    max-height: ${({ maxHgt }) => (maxHgt ? `${(maxHgt)}%` : '100%')};
    border-radius: ${({ bdRd, theme }) => (bdRd ? `${theme.metrics.px(bdRd)}px` : `${theme.metrics.px(10)}px`)};
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

export const SelectDayContainer = styled.SafeAreaView
 <{ dir?: string; bg?: string; color?: string; align?: string; justify?: string; mgTop?: string; mgLeft?: string; wdt?: string; hgt?: string; bdRd?: string; bdRdBL?: string; bdRdBR?: string}>
 `
    display: flex;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
    color: ${({ color, theme }) => theme.colors[color || 'brisk']};
    flex-direction: ${({ dir }) => dir || 'row'};
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || -10])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` :'85%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : `${theme.metrics.px(55)}px`)};
    border-bottom-left-radius: ${({ bdRdBL, theme }) => theme.metrics.px([bdRdBL || 20])}px;
    border-bottom-right-radius: ${({ bdRdBR, theme }) => theme.metrics.px([bdRdBR || 20])}px;
`

export const ModalContainer = styled.SafeAreaView
 <{ bg?: string; align?: string; justify?: string; wdt?: string; hgt?: string; bdRd?: string; pdd?: string }>
 `
    background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'center'};
    width: ${({ wdt, theme }) => (wdt ? (theme.metrics.px(wdt)) : '90%')};
    height: ${({ hgt, theme }) => (hgt ? (theme.metrics.px(hgt)) : '55%')};
    padding: ${({ pdd, theme }) => theme.metrics.px([pdd || 10])}px;
    border-radius: ${({ bdRd, theme }) => (bdRd ? `${theme.metrics.px(bdRd)}px` : `${theme.metrics.px(20)}px`)};
`