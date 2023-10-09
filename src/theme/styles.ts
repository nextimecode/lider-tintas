import { ColorMode, color } from '@chakra-ui/react'
import { SystemStyleObject, mode } from '@chakra-ui/theme-tools'
interface StylesProps {
  colorMode: ColorMode
}

export const styles = {
  global: ({ colorMode }: StylesProps): SystemStyleObject => ({
    'ul, ol': {
      listStyle: 'none'
    },
    body: {
      fontFamily: 'body',
      color: mode('black', 'gray.500')({ colorMode }),
      bg: mode('gray.200', 'black')({ colorMode }),
      lineHeight: 'base',
    },
  }),
}
