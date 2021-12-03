import '../styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-multi-carousel/lib/styles.css'
import 'regenerator-runtime/runtime'
import { IdProvider } from '@radix-ui/react-id'

import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { NextPage } from 'next'
import { Toaster } from 'react-hot-toast'

type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const App = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return getLayout(
    <IdProvider>
      <Component {...pageProps} />
      <Toaster />
    </IdProvider>
  )
}
export default App
