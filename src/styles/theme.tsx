import { colors } from './colors'
import { fonts } from './fonts'
import { metrics } from './metrics'

export const lightTheme = {
    colors: {
        white: '#ffffff',
        brisk: '#1a2224',
        gray: '#555555', 
        lightGray: '#bbc0c4',
        darkRed: '#a82325',
        darkGreen: '#265160',
        
        transparent: 'rgba(255, 255, 255, 0.0);'
    
    },
    fonts,
    metrics
}

export const darkTheme = {
    colors: {
        white: '#ffffff',
        brisk: '#1a2224',
        gray: '#ffffff', 
        lightGray: '#bbc0c4',
        darkRed: '#rgb(90, 8, 8);',
        darkGreen: '#265160',
        
        transparent: 'rgba(255, 255, 255, 0.0);'
    
    },
    fonts,
    metrics
}