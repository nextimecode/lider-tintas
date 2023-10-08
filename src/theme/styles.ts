import { ColorMode } from '@chakra-ui/react'
import { SystemStyleObject, mode } from '@chakra-ui/theme-tools'
interface StylesProps {
  colorMode: ColorMode
}

export const styles = {
  global: ({ colorMode }: StylesProps): SystemStyleObject => ({
    body: {
      fontFamily: 'body',
      color: mode('black', 'white')({ colorMode }),
      bg: mode('gray.200', 'black')({ colorMode }),
      lineHeight: 'base',
    },
  }),
}
