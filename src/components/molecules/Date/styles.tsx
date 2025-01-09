import styled from 'styled-components/native'

export const HeaderDateStyle = styled.Text
<{ color?: string; fontWgt?: string; fontFamily?: string; justify?: string; fontSize?: string; alignSelf?: string; wdt?: string; mgTop?: string; mgBottom?: string; mgLeft?: string; pddLeft?: string }>
`
  color: ${({ color, theme }) => theme.colors[color || 'brisk']};
  font-weight: ${({ fontWgt }) => fontWgt || 'normal' };
  font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'bold']};
  font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(10)}px`)};
  alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'}; 
  width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
  marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 5])}px;
  marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 0])}px;
`