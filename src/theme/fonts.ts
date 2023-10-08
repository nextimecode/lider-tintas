import { Roboto, Open_Sans as OpenSans } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
const openSans = OpenSans({ subsets: ['latin'] })

export const fonts = {
  heading: roboto.style.fontFamily,
  body: openSans.style.fontFamily,
}
