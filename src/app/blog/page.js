import { gql } from 'graphql-request'
import { NextArticleList } from '../../components/organisms/NextArticleList'
import { hygraphClient } from '@/lib/client'
import { blogPageQuery } from '@/lib/queries'

async function getPost() {
  const client = hygraphClient()
  const GET_POSTS_QUERY = gql`
    query GetPosts {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        date
        tags
        excerpt
        title
        author {
          id
          name
          picture {
            id
            url
          }
          title
        }
        coverImage {
          url
        }
      }
    }
  `
  const response = await client.request(blogPageQuery)
  return response.posts
}

export default async function Blog() {
  const posts = await getPost()
  console.log('posts', posts)
  return (
    <NextArticleList posts={posts} />
  )
}
