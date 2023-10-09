import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { config } from './config'
import { styles } from './styles'
import { fonts } from './fonts'
import { components } from './additions'

export const theme = extendTheme({
  colors,
  config,
  styles,
  fonts,
  components,
  breakpoints : {
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em'
  }
})
