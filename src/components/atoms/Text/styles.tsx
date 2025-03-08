import styled from 'styled-components/native'

export const PageTitleStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string; mgTop?: string; mgBottom?: string; mgLeft?: string }>
`
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'bold']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(20)}px`)};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 10])}px;
    marginBottom: ${({ mgBottom, theme }) => theme.metrics.px([mgBottom || 0])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 15])}px;
`

export const PageSubTitleStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string; alignSelf?: string; mgTop?: string; mgBottom?: string; mgLeft?: string; pddLeft?: string }>
`
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'regular']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(18)}px`)};
    alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'}; 
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 0])}px;
    marginBottom: ${({ mgBottom, theme }) => theme.metrics.px([mgBottom || 0])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 15])}px;
    paddingLeft: ${({ pddLeft, theme }) => theme.metrics.px([pddLeft || 0])}px;
`

export const LoginTitleStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string; alignSelf?: string; mgTop?: string; mgBottom?: string; mgLeft?: string; pddLeft?: string }>
`
    color: ${({ color, theme }) => theme.colors[color || 'white']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'bold']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(18)}px`)};
    alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'}; 
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 10])}px;
    marginBottom: ${({ mgBottom, theme }) => theme.metrics.px([mgBottom || 0])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 10])}px;
    paddingLeft: ${({ pddLeft, theme }) => theme.metrics.px([pddLeft || 55])}px;
`

export const HeaderTextStyle = styled.Text
<{ color?: string; fontWgt?: string; fontFamily?: string; fontSize?: string; alignSelf?: string; wdt?: string; mgTop?: string; mgBottom?: string; mgLeft?: string; pddLeft?: string }>
  `
    color: ${({ color, theme }) => theme.colors[color || 'brisk']};
    font-weight: ${({ fontWgt }) => fontWgt || 'normal' };
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'bold']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(14)}px`)};
    alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'}; 
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '225%')};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || -15])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 5])}px;
`

export const ContactNameStyle = styled.Text
<{ color?: string; fontWgt?: string; fontFamily?: string; fontSize?: string; mgTop?:string; mgLeft?: string }>
`
    color: ${({ color, theme }) => theme.colors[color || 'darkGreen']};
    font-weight: ${({ fontWgt }) => fontWgt || 'bold' };
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'regular']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(14)}px`)};
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 0])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 5])}px;
`

export const InfoTextStyle = styled.Text
<{ color?: string; fontWgt?: string; fontFamily?: string; alignSelf?: string; fontSize?: string; mgTop?:string; mgBottom?:string; mgLeft?: string; mgRight?: string }>
`
    color: ${({ color, theme }) => theme.colors[color || 'darkGreen']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'regular']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(13)}px`)};
    alignSelf: ${({ alignSelf }) => alignSelf || 'flex-start'}; 
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 0])}px;
    marginBottom: ${({ mgBottom, theme }) => theme.metrics.px([mgBottom || -3])}px;
    marginLeft: ${({ mgLeft, theme }) => theme.metrics.px([mgLeft || 5])}px;
    marginRight: ${({ mgRight, theme }) => theme.metrics.px([mgRight || 0])}px;
    flex-wrap: nowrap;
    overflow: hidden;
`

export const ButtonTextStyle = styled.Text
<{ color?: string; fontFamily?: string; fontSize?: string }>
`
    color: ${({ color, theme }) => theme.colors[color || 'black']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'semiBold']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(14)}px`)};
`

export const ErrorMessage = styled.Text
<{ color?: string; cor?: string; mgTop?: string; pddLeft?: string; jtCt?: string; fontSize?: string; fontWgt?: string; fontFamily?: string }>
`
    color: ${({ color, theme }) => theme.colors[color || 'darkRed']};
    font-family: ${({ fontFamily, theme }) => theme.fonts[fontFamily || 'regular']};
    font-size: ${({ fontSize, theme }) => (fontSize ? `${theme.metrics.px(fontSize)}px` : `${theme.metrics.px(20)}px`)};
    font-weight: ${({ fontWgt }) => fontWgt || 'normal' };
    paddingLeft: ${({ pddLeft, theme }) => theme.metrics.px([pddLeft || 10])}px;
    marginTop: ${({ mgTop, theme }) => theme.metrics.px([mgTop || 8])}px;
`