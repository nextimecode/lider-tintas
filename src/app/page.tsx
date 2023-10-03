import { Navigation } from "@/components/organisms/Navigation";
import { pageQuery } from "@/lib/queries";
import { parsePageData } from '@/utils/_parsePageData'
import { Wrapper } from "@/components";

async function getPost(slug: string) {
  const apolloUri = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

  if (!apolloUri) {
    throw new Error(
      'A variável de ambiente NEXT_PUBLIC_HYGRAPH_ENDPOINT não está definida.',
    )
  }

  const response = await fetch(apolloUri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: pageQuery(slug),
      variables: {
        slug
      },
    }),
  })
  const { data } = await response.json()
  const page = data.page
  const parsedPageData = await parsePageData(page)
  return parsedPageData
}
export default async function Home() {
  const page = await getPost('home')
  return <Wrapper {...page} />
}
