import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { App } from '../components'
const queryCache = new QueryCache()
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(2058536, 6)
  }, [])
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <App>
        <Component {...pageProps} />
      </App>
    </ReactQueryCacheProvider>
  )
}

export default MyApp
