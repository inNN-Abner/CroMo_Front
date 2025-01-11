import styled from 'styled-components/native'

export const WindowsStyle = styled.View
<{ dir?: string; bg?: string; align?: string; justify?: string; mgTop?: string; mgLeft?: string; wdt?: string; hgt?: string; bdRdBL?: string; bdRdBR?: string; bdRdTL?: string; bdRdTR?: string; bdRd?: string }>
`
    overflow: hidden;       
    display: flex;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
    align-items: ${({ align }) => align || 'flex-start'}; 
    justify-content: ${({ justify }) => justify || 'flex-start'};
    flex-direction: ${({ dir }) => dir || 'row'};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 10])}px;
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '90%')};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '85%')};
    border-bottom-left-radius: ${({ bdRdBL, theme }) => theme.metrics.px([bdRdBL || 20])}px;
    border-bottom-right-radius: ${({ bdRdBR, theme }) => theme.metrics.px([bdRdBR || 20])}px;
    border-top-left-radius: ${({ bdRdTL, theme }) => theme.metrics.px([bdRdTL || 20])}px;
    border-top-right-radius: ${({ bdRdTR, theme }) => theme.metrics.px([bdRdTR || 20])}px;
`