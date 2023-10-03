'use client'
import { useRef, useState, useEffect } from 'react'
import {
  Box,
  Flex,
  VisuallyHidden,
  Grid,
  Button,
  Text,
  Stack
} from '@chakra-ui/react'
import { useRouter, usePathname } from 'next/navigation'
import { Transition, TransitionStatus } from 'react-transition-group';

import { LogoSVG, MarkSVG } from '@/components/atoms/svgs'
import { MenuIcon, XIcon } from '@/components/atoms/icons'
import { Link } from '@/components/atoms/Link'

const defaultStyle = {
  transition: `all 150ms cubic-bezier(0.4, 0, 1, 1)`
}

const transitionStyles: Record<TransitionStatus, React.CSSProperties | null> = {
  entering: { transform: 'scale(0.95)', opacity: 0, visibility: 'hidden' },
  entered: { transform: 'scale(1)', opacity: 1, visibility: 'visible' },
  exiting: { transform: 'scale(1)', opacity: 1, visibility: 'visible' },
  exited: { transform: 'scale(0.95)', opacity: 0, visibility: 'hidden' },
  unmounted: null,
};

type Page = {
  id: string | number;
  slug: string;
  navigationLabel?: string;
};

type NavigationProps = {
  pages: Page[];
};

export function Navigation({ pages }: NavigationProps) {{
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter()
  const pathname = usePathname()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!container?.current?.contains(event.target as Node)) {
        if (!mobileNavOpen) return;
  
        setMobileNavOpen(false);
      }
    };
  
    window.addEventListener('click', handleOutsideClick);
  
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [mobileNavOpen, container]);
  

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!mobileNavOpen) return;
  
      if (event.key === 'Escape') {
        setMobileNavOpen(false);
      }
    };
  
    document.addEventListener('keyup', handleEscape);
  
    return () => document.removeEventListener('keyup', handleEscape);
  }, [mobileNavOpen]);
  

  return (
    <Box ref={container} pos="relative" bg="white" boxShadow="base">
      <Transition in={mobileNavOpen} timeout={150}>
        {(state: TransitionStatus) => (
          <Box
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            m={2}
            border="1px solid rgba(0, 0, 0, 0.05)"
            pos="absolute"
            top="0"
            right="0"
            left="0"
            zIndex="docked"
            transition="all 150ms cubic-bezier(0.4, 0, 0.2, 1)"
            transformOrigin="top right"
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <Box pt={5} pb={6} px={5}>
              <Flex alignItems="center" justifyContent="space-between">
                <div>
                  <Link href="/">
                    <VisuallyHidden>Hygraph</VisuallyHidden>
                    <Box as={MarkSVG} h={8} w="auto" color="indigo.600" />
                  </Link>
                </div>
                <Box mr={-2}>
                  <Button
                    type="button"
                    bg="white"
                    borderRadius="md"
                    p={2}
                    display="inline-flex"
                    color="gray.400"
                    _hover={{
                      color: 'gray.500',
                      bg: 'gray.100'
                    }}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <VisuallyHidden>Close menu</VisuallyHidden>
                    <Box as={XIcon} w={6} h={6} aria-hidden="true" />
                  </Button>
                </Box>
              </Flex>
              {/* <Box mt={6}>
                {pages && pages.length && (
                  <Grid as="nav" gridRowGap={8}>
                    {pages.map((page) => {
                      const isActive = router.asPath.startsWith(`/${page.slug}`)

                      return (
                        // <ChakraLink
                        //   as={Link}
                        //   key={page.id} href={`/${page.slug}`} passHref
                        //   m={-3}
                        //   p={3}
                        //   display="flex"
                        //   alignItems="center"
                        //   borderRadius="md"
                        //   color={isActive ? 'indigo.600' : 'inherit'}
                        //   _hover={{
                        //     bg: 'gray.50'
                        //   }}
                        // >
                        //   <Text
                        //     as="span"
                        //     ml={3}
                        //     fontSize="md"
                        //     fontWeight="medium"
                        //     color="gray.900"
                        //   >
                        //     {page.navigationLabel ||
                        //       page.slug.charAt(0).toUpperCase() +
                        //         page.slug.slice(1)}
                        //   </Text>
                        // </ChakraLink>
                        <Text
                            as="span"
                            ml={3}
                            fontSize="md"
                            fontWeight="medium"
                            color="gray.900"
                          >
                            {page.navigationLabel ||
                              page.slug.charAt(0).toUpperCase() +
                                page.slug.slice(1)}
                          </Text>
                      )
                    })}
                  </Grid>
                )}
              </Box> */}
            </Box>
          </Box>
        )}
      </Transition>

      <Box maxW="7xl" mx="auto" px={[4, 6]}>
        <Stack
          display="flex"
          justifyContent={['space-between', null, 'flex-start']}
          alignItems="center"
          py={6}
          direction="row"
          spacing={{ md: 10 }}
        >
          <Flex w={{ lg: 0 }} flex={{ lg: '1 1 0' }}>
            {/* <Link href="/">
              <VisuallyHidden>Hygraph</VisuallyHidden>
              <Box as={LogoSVG} h={10} color="indigo.600" w="auto" />
            </Link> */}
          </Flex>
          <Box mr={-2} my={-2} display={{ md: 'none' }}>
            <Button
              type="button"
              bg="white"
              borderRadius="md"
              p={2}
              display="inline-flex"
              color="gray.400"
              _hover={{
                color: 'gray.500',
                bg: 'gray.100'
              }}
              onClick={() => setMobileNavOpen(true)}
            >
              <VisuallyHidden>Open menu</VisuallyHidden>
              <Box as={MenuIcon} w={6} h={6} aria-hidden="true" />
            </Button>
          </Box>
          {pages && pages.length && (
            <Stack
              as="nav"
              display={['none', null, 'flex']}
              direction="row"
              spacing={10}
            >
              {pages.map((page) => {
                const isActive = pathname.startsWith(`/${page.slug}`)

                return (
                  <Link
                    key={page.id}
                    href={`/${page.slug}`}
                    fontSize="md"
                    fontWeight="medium"
                    color={isActive ? 'indigo.600' : 'gray.500'}
                    _hover={{
                      color: 'gray.900'
                    }}
                  >
                    {page.navigationLabel ||
                      page.slug.charAt(0).toUpperCase() + page.slug.slice(1)}
                  </Link>
                )
              })}
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  )
}
}
