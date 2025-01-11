import { fonts } from "./fonts"
import { metrics } from "./metrics"

export const lightTheme = {
    colors: {
        white: '#ffffff',
        brisk: '#1a2224',
        gray: '#555555', 
        lightGray: '#bbc0c4',
        darkRed: '#a82325',
        darkGreen: '#265160',
        everWhite: '#ffffff',
        greenBlack: '#265160',
        greenWhite: '#ffffff',
        blueYellow: 'rgb(255, 166, 0)',
        
        transparent: 'rgba(255, 94, 0, 0)',
        blackTransparent: 'rgba(255, 255, 255, 0.82)'
    },
    fonts,
    metrics
}

export const darkTheme = {
    colors: {
        white: '#1a2224',
        brisk: '#ffffff',
        gray: '#ffffff', 
        lightGray: '#bbc0c4',
        darkRed: '#a82325',
        darkGreen: '#265160',
        everWhite: '#ffffff',
        greenBlack: '#1a2224',
        greenWhite: '#265160',
        blueYellow: 'rgb(40, 53, 124)',

        transparent: 'rgba(255, 255, 255, 0.0)',
        blackTransparent: 'rgba(0, 0, 0, 0.6)'
    },
    fonts,
    metrics
}