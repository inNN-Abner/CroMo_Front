import styled from 'styled-components/native'

export const HeaderContainerStyle = styled.View
    <{ bg?: string; wdt?: string; hgt?: string; align?: string; justify?: string; dir?: string; mgTop?: string }>`
    display: flex;
    align-items: center; 
    border-radius: 20px;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    margin-right: auto;
    flex-direction: ${({ dir }) => dir || 'row'};
    align-itens: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'space-between'};
    background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
    height: ${({hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '60px')};
    margin-top:  ${({ mgTop, theme }) => (mgTop ? `${theme.metrics.px(mgTop)}px` :  `${theme.metrics.px(30)}px`)};
`