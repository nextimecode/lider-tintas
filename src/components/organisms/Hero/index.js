'use client'

import dynamic from 'next/dynamic'

import { Box, Heading, Stack } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import { Button } from '@/components'
import { Navigation } from '@/components/organisms/Navigation'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

export function Hero({ buttons, navigation, page }) {
  return (
    <Box position="relative" bg="gray.50">
      <Navigation {...navigation} />
      <Box as="main" position={{ lg: 'relative' }}>
        <Box
          mx="auto"
          maxW="7xl"
          w="full"
          py={{ lg: 20 }}
          pt={16}
          pb={20}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Box px={[4, 8]} pr={{ xl: 16 }} width={{ lg: '50%' }}>
            <Heading
              as="h1"
              fontSize={['4xl', '5xl', '6xl', '5xl', '6xl']}
              letterSpacing="tight"
              lineHeight="1"
              fontWeight="extrabold"
              color="gray.900"
            >
              {page.title}
            </Heading>
            {page.subtitle && (
              <Box
                className="prose prose-lg sm:prose-xl"
                mt={[3, null, 5]}
                w="full"
                maxW={['md', null, '3xl']}
                mx="auto"
              >
                <MDXRemote {...page.subtitle.mdx} />
              </Box>
            )}
            {buttons && (
              <Stack
                mt={10}
                direction={['column', 'row']}
                display={{ sm: 'flex' }}
                justifyContent={{ sm: 'center', lg: 'flex-start' }}
                spacing={[3, 0]}
              >
                {buttons.map((button) => (
                  <Box
                    key={button.id}
                    sx={{
                      ':nth-of-type(even)': {
                        mx: [0, 3]
                      }
                    }}
                  >
                    <Button {...button} />
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
        <Box
          pos={{ base: 'relative', lg: 'absolute' }}
          w={{ base: 'full', lg: '50%' }}
          h={[64, 72, 96, 'full']}
          top={{ lg: 0 }}
          bottom={{ lg: 0 }}
          right={{ lg: 0 }}
        >
          <ReactPlayer
            url='/video/movie.mp4'
            controls={false}
            playing
            muted
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  )
}
