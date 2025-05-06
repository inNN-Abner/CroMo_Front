import styled from 'styled-components/native'

export const Grid = styled.Text
<{ align?: string; pdd?: string; pddLeft?: string; mgLeft?: string; txtAlign?: string; fontSize?: string; fontFamily?: string; color?: string; bg?: string; wdt?: string; hgt?: string; mgTop?: string; dir?: string; bdRd?: string; numberLines?: string }>
`
    overflow: hidden;
    background-color: ${({ bg, theme }) => theme.colors[bg || 'gray']};
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'bold']};
    font-size: ${({ theme, fontSize }) => theme.metrics.px([fontSize || 70])}px;
    textAlign: ${({ align }) => align || 'center'};
    textAlignVertical: ${({ txtAlign }) => txtAlign || 'center'};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 5])}px;  
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 5])}px;
    width: ${({ wdt, theme }) => theme.metrics.px([wdt || 70])}px;
    height: ${({ hgt, theme }) => theme.metrics.px([hgt || 50])}px;
    padding: ${({ pdd, theme }) => theme.metrics.px([pdd || 0])}px;
    padding-left: ${({ pddLeft, theme }) => theme.metrics.px([pddLeft || 0])}px;
    border-radius: ${({ bdRd, theme }) => theme.metrics.px([bdRd || 5])}px;
    numberOfLines: ${({ numberLines }) => [numberLines || 2]};
`