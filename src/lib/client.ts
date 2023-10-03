import { GraphQLClient } from 'graphql-request'

const NEXT_PUBLIC_HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
const GRAPHCMS_PREVIEW_TOKEN = process.env.GRAPHCMS_PREVIEW_TOKEN;
const GRAPHCMS_TOKEN = process.env.GRAPHCMS_TOKEN;

if (!NEXT_PUBLIC_HYGRAPH_ENDPOINT || !GRAPHCMS_PREVIEW_TOKEN || !GRAPHCMS_TOKEN) {
  throw new Error("Variáveis de ambiente não definidas");
}

export const hygraphClient = (preview = false) =>
  new GraphQLClient(NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
    headers: {
      ...(GRAPHCMS_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? GRAPHCMS_PREVIEW_TOKEN
            : GRAPHCMS_TOKEN
        }`
      })
    }
  })

