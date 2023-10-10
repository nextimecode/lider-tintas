import { pageQuery } from "@/lib/queries";
import { parsePageData } from '@/utils/parsePageData'
import { Breakpoint, LogoCloud, Testimonial, Hero, Footer, Products } from "@/components";

async function getPage(slug: string) {
  const apolloUri = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

  if (!apolloUri) {
    throw new Error(
      'A variável de ambiente NEXT_PUBLIC_HYGRAPH_ENDPOINT não está definida.',
    )
  }

  const response = await fetch(apolloUri, {
    cache: 'no-store',
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
  const page = await getPage('home')
  console.log(page)
  return (
    <>
      <Hero
        buttons={page.hero.buttons}
        navigation={page.navigation}
        page={page}
      />
      {page.products && <Products items={page.products} />}
      <Breakpoint
        buttons={page.blocks[0].buttons}
        subtitle={page.blocks[0].subtitle}
        title={page.blocks[0].title}
      />
      <Testimonial
        content={page.blocks[1].content}
        person={page.blocks[1].person}
      />
      <LogoCloud
        logoCloudTitle={page.blocks[2].logoCloudTitle}
      />
      <Footer
        primaryLinks={page.footer.primaryLinks}
        secondaryLinks={page.footer.secondaryLinks}
      />
    </>
  )
}
