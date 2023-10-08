'use client'

import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

const linkDefaultStyles = {
  width: 'full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: [8, null, 10],
  py: [3, null, 4],
  fontSize: ['base', null, 'lg'],
  fontWeight: 'medium',
  borderRadius: 'md'
}

export function Button({ href, label, theme }) {
  if (!href || !label) return null

  if (href.includes('http')) {
    return (
      <Box borderRadius="md" boxShadow="md">
        <Link
          isExternal
          href={href}
          {...linkDefaultStyles}
          variant={theme}
        >
          {label}
        </Link>
      </Box>
    )
  }

  return (
    <Box borderRadius="md" boxShadow="md">
      <Link href={href} passHref {...linkDefaultStyles} variant={theme}>
        {label}
      </Link>
    </Box>
  )
}
