import { Box, Heading } from '@chakra-ui/react'

export default function LogoCloud({ logoCloudTitle }) {
  if (!(logoCloudTitle)) return null

  return (
    <Box
      id="quem-somos"
      bg="indigo.700"
    >
      <Box maxW="7xl" mx="auto" py={[16, 20]} px={[4, 6, null, 8]}>
        <Heading as="h2" fontSize="3xl" fontWeight="extrabold" color="white">
          {logoCloudTitle}
        </Heading>
      </Box>
    </Box>
  )
}
