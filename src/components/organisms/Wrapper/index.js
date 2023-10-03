import * as Blocks from '@/components/atoms/blocks'

export function Wrapper({ banner, blocks, hero, navigation, ...page }) {
  return (
    <>
      {blocks.map((block) => {
        const Component = Blocks[block.component] || Blocks[block.__typename]

        if (!Component) return null

        return <Component key={block.id} page={page} {...block} />
      })}
    </>
  )
}
