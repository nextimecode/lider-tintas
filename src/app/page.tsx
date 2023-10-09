import { pageQuery } from "@/lib/queries";
import { parsePageData } from '@/utils/parsePageData'
import { Breakpoint, Grid, LogoCloud, PricingPlanSection, StatSection, Testimonial, Hero, Footer } from "@/components";

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
  // console.log(page)
  return (
    <>
      <Hero
        buttons={page.hero.buttons}
        image={page.hero.image} navigation={page.navigation}
        page={page}
      />
      <LogoCloud
        companies={page.blocks[0].companies}
        logoCloudTitle={page.blocks[0].logoCloudTitle}
      />
      <Breakpoint
        buttons={page.blocks[3].buttons}
        subtitle={page.blocks[3].subtitle}
        title={page.blocks[3].title}
      />
      <Grid
        children={page.blocks[4].children}
        columnComponent={page.blocks[4].columnComponent}
        columns={page.blocks[4].columns}
        gridHeadline={page.blocks[4].gridHeadLine}
        gridSubtitle={page.blocks[4].gridSubtitle}
        gridTag={page.blocks[4].gridTag}
        gridTitle={page.blocks[4].gridTitle}
        layout={page.blocks[4].layout}
        theme={page.blocks[4].theme}
        width={page.blocks[4].width}
      />
      <PricingPlanSection
        page={page}
        grid={page.blocks[4]}
      />
      <StatSection
        columns={page.blocks[2].columns}
        gridSubtitle={page.blocks[2].gridSubtitle}
        gridTitle={page.blocks[2].gridTitle}
      />
      <Testimonial
        content={page.blocks[5].content}
        person={page.blocks[5].person}
      />
      <Footer
        primaryLinks={page.footer.primaryLinks}
        secondaryLinks={page.footer.secondaryLinks}
      />
    </>
  )
}
