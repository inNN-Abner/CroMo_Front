import { Dimensions, PixelRatio } from 'react-native'

//Deixar a tela responsiva para todos os dispositivos

const { width } = Dimensions.get('window')

const canvaWidth = 375

const px = (valuePx: number) => {
    const widthPercent = (valuePx / canvaWidth) * 100
    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * widthPercent) / 100
    )
    return screenPixel
}

export const metrics = {
    px
}