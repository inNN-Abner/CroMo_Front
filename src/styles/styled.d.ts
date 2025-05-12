import 'styled-components/native'
import { lightTheme } from './colors'
import { metrics } from './metrics'
import { fonts } from './fonts'

type CustomTheme = typeof lightTheme & {
  metrics: typeof metrics
  fonts: typeof fonts
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}
