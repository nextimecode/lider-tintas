// app/page.tsx
'use client'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/next-js'
import { ReactNode } from 'react'


export interface LinkProps extends ChakraLinkProps {
  children: ReactNode
}

export function Link({ children, ...props }: LinkProps) {
  return (
    <ChakraLink {...props}>
      {children}
    </ChakraLink>
  )
}

Link.displayName = 'Link'
