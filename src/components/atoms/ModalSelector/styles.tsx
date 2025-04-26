import styled from 'styled-components/native';

export const ScrollableContent = styled.ScrollView
`
  flex-grow: 1;
`

export const ModalContainer = styled.View
<{ bgColor?: string; justify?: string; align?: string }>
`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor || 'rgba(0, 0, 0, 0.5)'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
`

export const ModalContent = styled.View
  <{ bg?: string; align?: string; wdt?: string; pdd?: string; bdRd?: string; maxHgt?: string; }>
`
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  border-radius: ${({ bdRd, theme }) => theme.metrics.px(bdRd || 10)}px;
  padding: ${({ pdd, theme }) => theme.metrics.px(pdd || 20)}px;
  width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '80%')};
  align-items: ${({ align }) => align || 'center'};
  max-height: ${({ maxHgt, theme }) => (maxHgt ? `${theme.metrics.px(maxHgt)}px` : '80%')};
`

export const ModalTitle = styled.Text
  <{ color?: string; fontSize?: string; mgTop?: string; mgBottom?: string; fontWeight?: string; }>
`
  color: ${({ color, theme }) => theme.colors[color || 'brisk']};
  font-size: ${({ fontSize, theme }) => theme.metrics.px(fontSize || 18)}px;
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  margin-bottom: ${({ mgBottom, theme }) => theme.metrics.px(mgBottom || 15)}px;
  margin-top: ${({ mgTop, theme }) => theme.metrics.px(mgTop || 0)}px;
`

export const OptionButton = styled.TouchableOpacity
  <{ bg?: string; color?: string; pdd?: string; mgVertical?: string; wdt?: string; bdRd?: string; align?: string; hgt?: string }>
`
  background-color: ${({ bg, theme }) => theme.colors[bg || 'white']};
  align-items: ${({ align }) => align || 'center'};
  padding: ${({ pdd, theme }) => theme.metrics.px(pdd || 10)}px;
  margin-vertical: ${({ mgVertical, theme }) => theme.metrics.px(mgVertical || 5)}px;
  width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
  height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` : '100%')};
  border-radius: ${({ bdRd, theme }) => theme.metrics.px(bdRd || 5)}px;
`

export const OptionText = styled.Text
  <{ color?: string; fontSize?: string }>
`
  color: ${({ color, theme }) => theme.colors[color || 'brisk']};
  font-size: ${({ fontSize, theme }) => theme.metrics.px(fontSize || 16)}px;
`

export const CloseButton = styled.TouchableOpacity
  <{ bg?: string; color?: string; pdd?: string; mgBottom?: string; mgTop?: string; bdRd?: string; wdt?: string; align?: string }>
`
  margin-top: ${({ mgTop, theme }) => theme.metrics.px(mgTop || 15)}px;
  margin-bottom: ${({ mgBottom, theme }) => theme.metrics.px(mgBottom || 0)}px;
  padding: ${({ pdd, theme }) => theme.metrics.px(pdd || 10)}px;
  background-color: ${({ bg, theme }) => theme.colors[bg || 'darkRed']};
  color: ${({ color, theme }) => theme.colors[color || 'everWhite']};
  border-radius: ${({ bdRd, theme }) => theme.metrics.px(bdRd || 5)}px;
  width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : '100%')};
  align-items: ${({ align }) => align || 'center'};
`

export const CloseButtonText = styled.Text
  <{ color?: string; fontSize?: string; fontWeight?: string }>
`
  color: ${({ color, theme }) => theme.colors[color || 'everWhite']};
  font-size: ${({ fontSize, theme }) => theme.metrics.px(fontSize || 16)}px;
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
`
