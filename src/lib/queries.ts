import { gql } from 'graphql-request'

const blogPageQuery = gql`
  fragment BlogPostFields on BlogPost {
    id
    authors {
      id
      name
      photo {
        id
        url
      }
      role
    }
    category
    content
    coverImage {
      id
      height
      url
      width
    }
    excerpt
    published
    slug
    title
  }

  query BlogPageQuery() {
    page(where: { slug: "blog" }) {
      id
      footer {
        id
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
          id
          navigationLabel
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      subtitle
      title
    }
    posts: blogPosts(orderBy: published_DESC) {
      ...BlogPostFields
    }
  }
`

const blogPostQuery = gql`
  query BlogPostQuery($slug: String!) {
    allPosts: blogPosts(orderBy: published_ASC) {
      id
      slug
      title
    }
    page(where: { slug: "blog" }) {
      footer {
        id
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
          id
          navigationLabel
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
    }
    post: blogPost(where: { slug: $slug }) {
      id
      authors {
        id
        name
        photo {
          id
          url
        }
        role
      }
      category
      content
      coverImage {
        id
        height
        url
        width
      }
      excerpt
      published
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      slug
      title
    }
  }
`

const pageQuery = (slug: string) => `{
  page(where: { slug: "${slug}"}) {
    blocks {
      __typename
      ... on Breakpoint {
        id
        buttons {
          id
          href
          label
          theme
        }
        subtitle
        title
      }
      ... on LogoCloud {
        id
        logoCloudTitle: title
      }
      ... on Testimonial {
        id
        content
        person {
          id
          name
          company {
            id
            logo {
              id
              height
              url
              width
            }
            name
          }
          photo {
            id
            height
            url
            width
          }
          role
        }
      }
    }
    hero {
      id
      buttons {
        id
        href
        label
        theme
      }
      image {
        id
        height
        url
        width
      }
      slug
    }
    footer {
      id
      primaryLinks {
        id
        navigationLabel
        slug
      }
      secondaryLinks {
        id
        navigationLabel
        slug
      }
      slug
      title
    }
    id
    marketing {
      __typename
      ... on Banner {
        id
        content
        href
        slug
        theme
      }
      ... on Newsletter {
        id
        ctaLabel
        subtitle
        title
      }
    }
    navigation {
      id
      slug
      pages(where: {slug_not: "home"}) {
        id
        navigationLabel
        slug
      }
    }
    seo {
      id
      description
      image {
        id
        height
        url
        width
      }
      keywords
      noIndex
      title
    }
    subtitle
    title
  }
  products {
    id
    image {
      height
      id
      url
      width
    }
    name
    title
    value
    beforeValue
  }
}`

export { blogPageQuery, blogPostQuery, pageQuery }
