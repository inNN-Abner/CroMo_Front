import styled from 'styled-components/native'

export const PhotoStyle = styled.Image
<{ source?: string; wdt?: string; hgt?: string; mgTop?: string; mgLeft?: string; bdRd?: string }>`
    source: ${({ source }) => source};
    width: ${({ wdt, theme }) => (wdt ? `${theme.metrics.px(wdt)}px` : `${theme.metrics.px(45)}px`)};
    height: ${({ hgt, theme }) => (hgt ? `${theme.metrics.px(hgt)}px` :  `${theme.metrics.px(45)}px`)};
    marginTop: ${({ mgTop, theme }) => (mgTop ? `${theme.metrics.px(mgTop)}px` : `${theme.metrics.px(0)}px`)};
    marginLeft: ${({ mgLeft, theme }) => (mgLeft ? `${theme.metrics.px(mgLeft)}px` : `${theme.metrics.px(10)}px`)};
    border-radius: ${({ bdRd, theme }) => (bdRd ? `${theme.metrics.px(bdRd)}px` : `${theme.metrics.px(100)}px`)};
`