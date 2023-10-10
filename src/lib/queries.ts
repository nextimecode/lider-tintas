const productsQuery = () => `{
  products {
    createdAt
    id
    publishedAt
    updatedAt
    name
    description
    price
    priceBefore
    image {
      height
      id
      url
      width
    }
  }
}`

export { productsQuery }
