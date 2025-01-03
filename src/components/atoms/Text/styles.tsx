import styled from 'styled-components/native'

export const PageTitleStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string}>
`
    color: ${({ color, theme }) => theme.colors[color || 'black']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'bold']};
    font-size: ${({ theme, fontSize }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(20)}px`)};
    `

export const PageSubTitleStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string}>
`
    color: ${({ color, theme }) => theme.colors[color || 'black']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'regular']};
    font-size: ${({ theme, fontSize }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(16)}px`)};
`

export const CardTextStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string}>
`
    color: ${({ color, theme }) => theme.colors[color || 'black']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'semiBold']};
    font-size: ${({ theme, fontSize }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(12)}px`)};
`

export const ButtonTextStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string}>
`
    color: ${({ color, theme }) => theme.colors[color || 'black']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'semiBold']};
    font-size: ${({ theme, fontSize }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(14)}px`)};
`