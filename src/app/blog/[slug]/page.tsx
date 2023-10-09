import { Asset } from '../../../graphql/generated'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {
  BlogAuthor,
  BlogTags,
} from '@/components'
import { NextProse } from '../../../components/atoms/NextProse'
import { notFound } from 'next/navigation'

interface Picture {
  url: string
  height: number
  width: number
}

interface Author {
  id: string
  name: string
  title: string
  picture: Picture
}

interface CoverImage {
  id: string
  url: string
  height: number
  width: number
}

interface Content {
  html: string
}

interface Seo {
  description: string
  keywords: string[]
  id: string
}

interface Post {
  id: string
  author: Author
  createdAt: string
  date: string
  excerpt: string
  slug: string
  stage: string
  tags: string[]
  title: string
  updatedAt: string
  coverImage: CoverImage
  content: Content
  seo: Seo
}

async function getProduct(slug: string) {
  const apolloUri = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

  if (!apolloUri) {
    throw new Error(
      'A variável de ambiente NEXT_PUBLIC_APOLLO_URI não está definida.',
    )
  }

  const response = await fetch(apolloUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
            blogPost(where: { slug: "${slug}"}) {
              id
              createdAt
              excerpt
              slug
              stage
              title
              updatedAt
              coverImage {
                id
                url
                height
                width
              }
              seo {
                description
                keywords
                id
              }
              content
              authors {
                id
                name
                photo {
                  url
                  height
                  width
                }
                createdAt
              }
            }
          }`,
      variables: {
        slug,
      },
    }),
  })
  const { data } = await response.json()
  console.log(data)
  return data
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const post = await getProduct(slug)

  if (!post) notFound()

  const { title } = post

  // const dateBlog = new Date(updatedAt)

  return (
    <Container maxW="container.md" pb={6}>
      {/* {coverImage && coverImage.width && coverImage.height && (
        <Image
          width={736}
          height={736}
          alt={title}
          src={coverImage.url}
          priority
        />
      )} */}
      <Heading pt={6}>{title}</Heading>
      {/* <Text textAlign={'center'}>{dateBlog.toLocaleDateString()}</Text> */}
      {/* <NextProse
        dangerouslySetInnerHTML={{
          __html: String(content),
        }}
      ></NextProse> */}

      {/* {authors && authors[0].picture && (
        <BlogAuthor
          image={authors[0].picture as Asset}
          name={authors[0].name}
          date={dateBlog}
          title={authors[0].title as string}
        />
      )} */}
      {/* {tags && (
        <Box pt={6} pb={2}>
          <BlogTags tags={tags} />
        </Box>
      )} */}
    </Container>
  )
}
