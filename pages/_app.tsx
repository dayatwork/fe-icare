import '../styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-multi-carousel/lib/styles.css'

import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { NextPage } from 'next'

type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return getLayout(<Component {...pageProps} />)
}
export default App
