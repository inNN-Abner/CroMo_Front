import styled from 'styled-components/native'

export const HeaderDateStyle = styled.Text
<{ bg?: string; color?: string; fontWgt?: string; align?: string; justify?: string; fontFamily?: string; fontSize?: string; wdt?: string; mgTop?: string; mgLeft?: string }>
`
  color: ${({ color, theme }) => theme.colors[color || 'brisk']};
  font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'bold']};
  font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(10)}px`)};
  width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
  marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 5])}px;
  marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
  align-items: ${({ align }) => align || 'center'}; 
  justify-content: ${({ justify }) => justify || 'center'};
  text-align: ${({ align }) => align || 'center'};
`