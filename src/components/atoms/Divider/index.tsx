import styled from 'styled-components/native';

export const Divider = styled.View<{ mgTop?: string; mgBottom?: string }>
`
    width: 95%;
    height: 0.5px;
    background-color: ${({ theme }) => theme.colors.lightGray || '#d3d3d3'};
    margin-top: ${({ mgTop, theme }) => theme.metrics.px(mgTop || '5')}px;
    margin-bottom: ${({ mgBottom, theme }) => theme.metrics.px(mgBottom || '10')}px;
`
