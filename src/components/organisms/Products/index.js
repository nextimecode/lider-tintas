'use client'

import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import { DotsSVG } from '@/components'
import { ProductSimple } from '../ProductSimples'

export function Products({
  items,
  layout = 'STACKED',
  theme = 'WHITE',
  width = 1
}) {

  const stackLayout = layout === 'STACK'
  const splitLayout = layout === 'SPLIT'

  return (
    <Box id="produtos" overflow="hidden" bg={theme === 'LIGHT' ? 'gray.50' : 'white'}>
      <Box pos="relative" maxW="7xl" mx="auto" py={12} px={[4, 6, null, 8]}>
        {splitLayout && (
          <Box
            as={DotsSVG}
            color="gray.200"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            top="100%"
            right="100%"
            left="auto"
            transform="translate(66.66%, -75%)"
          />
        )}
        <Box
          position="relative"
          display={{ lg: splitLayout && 'grid' }}
          gridColumnGap={{ lg: splitLayout && 8 }}
          gridTemplateColumns={{ lg: splitLayout && 'repeat(3, 1fr)' }}
        >
          <Box
            textAlign={{ lg: stackLayout && 'center' }}
            gridColumn={{ lg: splitLayout && 'span 1 / span 1' }}
          >
            <Heading
              as="h2"
              fontSize="md"
              fontWeight="semibold"
              color="indigo.600"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              teste
            </Heading>
            <Text
              mt={2}
              fontSize={['3xl', '4xl']}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="9"
              color="gray.900"
            >
              Produtos em Destaques
            </Text>

            <Box
              mt={4}
              maxW="2xl"
              fontSize="xl"
              color="gray.500"
              mx={{ lg: 'auto' }}
            >
              Descubra os produtos que são sucesso em nossa loja. Qualidade e inovação em um só lugar."
            </Box>
          </Box>
          <Stack
            as={'dl'}
            mt={{ base: 10, lg: splitLayout && 0 }}
            spacing={[10, 0]}
            display={{ sm: 'grid' }}
            gridColumnGap={{ sm: 8 }}
            gridRowGap={{ sm: 10 }}
            gridColumn={{ lg: 'span 2 / span 2' }}
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              lg: `repeat(${width}, 1fr)`
            }}
          >
            {products.map((product) => {
              return <ProductSimple key={product.id} {...product} />
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
