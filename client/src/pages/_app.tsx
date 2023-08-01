import '@/styles/index.scss'
import Loyaut from '@/loyaut/loyaut'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Loyaut>
        <Component {...pageProps} />
    </Loyaut>
  )
}
