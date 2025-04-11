import styled from 'styled-components/native'

export const LogoImageStyle = styled.Image
 <{source?: string; justify?: string; wdt?: string; hgt?: string; mgTop?: string; mgRight?: string; mgLeft?:string;}>
 `
    source: ${({ source }) => source || 'DarkLogin'};
    justify-content: ${({ justify }) => justify || 'center'};
    align-itens: 'center';
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` :'100%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(200)}px`)};
    marginTop: ${({ mgTop, theme }) => (mgTop ? `${theme.metrics.px(mgTop)}px` : `${theme.metrics.px(75)}px`)};
    marginRight: ${({ mgRight, theme }) => (mgRight ? `${theme.metrics.px(mgRight)}px` : `${theme.metrics.px(10)}px`)};
    marginLeft: ${({ mgLeft, theme }) => (mgLeft ? `${theme.metrics.px(mgLeft)}px` : `${theme.metrics.px(0)}px`)};
`

export const LogoHeaderStyle = styled.Image
 <{source?: string; justify?: string; wdt?: string; hgt?: string; mgTop?: string; mgRight?: string; mgLeft?:string; bdRd?: string }>
 `
    source: ${({ source }) => source || 'DarkContainer_Logo'};
    justify-content: ${({ justify }) => justify || 'center'};
    align-itens: 'center';
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` :'100%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(200)}px`)};
    marginTop: ${({ mgTop, theme }) => (mgTop ? `${theme.metrics.px(mgTop)}px` : `${theme.metrics.px(75)}px`)};
    marginRight: ${({ mgRight, theme }) => (mgRight ? `${theme.metrics.px(mgRight)}px` : `${theme.metrics.px(10)}px`)};
    marginLeft: ${({ mgLeft, theme }) => (mgLeft ? `${theme.metrics.px(mgLeft)}px` : `${theme.metrics.px(0)}px`)};
    border-radius: ${({ bdRd, theme }) => (bdRd ? `${theme.metrics.px(bdRd)}px` : `${theme.metrics.px(5)}px`)};
`

export const IconButtonStyle = styled.Image
 <{source?: string; justify?: string; wdt?: string; hgt?: string; mgTop?: string; mgRight?: string; mgLeft?:string; bdRd?: string }>
 `
    source: ${({ source }) => source || 'Chatbot_CroMo'};
    justify-content: ${({ justify }) => justify || 'center'};
    align-itens: 'center';
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` :'100%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(55)}px`)};
    marginTop: ${({ mgTop, theme }) => (mgTop ? `${theme.metrics.px(mgTop)}px` : `${theme.metrics.px(0)}px`)};
    marginRight: ${({ mgRight, theme }) => (mgRight ? `${theme.metrics.px(mgRight)}px` : `${theme.metrics.px(0)}px`)};
    marginLeft: ${({ mgLeft, theme }) => (mgLeft ? `${theme.metrics.px(mgLeft)}px` : `${theme.metrics.px(0)}px`)};
`