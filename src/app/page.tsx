import { productsQuery } from "@/lib/queries";
import { parsePageData } from '@/utils/parsePageData'
import { Breakpoint, LogoCloud, Testimonial, Hero, Footer, Products } from "@/components";

async function getPage() {
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
      query: productsQuery(),
    }),
  })
  try {
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
export default async function Home() {
  const { products } = await getPage()
  return (
    <>
      {/* <Hero
        buttons={page.hero.buttons}
        navigation={page.navigation}
        page={page}
      /> */}
      {products && <Products products={products} />}
      {/* <Breakpoint
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
      /> */}
    </>
  )
}
