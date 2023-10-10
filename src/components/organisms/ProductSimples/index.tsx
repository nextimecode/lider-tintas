'use client'

import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Heading,
} from '@chakra-ui/react'

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

interface Image {
  height: number
  width: number
  url: string
}

interface Product {
  name: string
  price: number
  priceBefore: number
  description: string
  image: Image
}
export function ProductSimple({
  name,
  price,
  priceBefore,
  description,
  image,
 }: Product) {
  const { url } = image
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={'quaternary'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={url}
            alt={name}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
            {name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {description}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              R${price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              R${priceBefore}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
