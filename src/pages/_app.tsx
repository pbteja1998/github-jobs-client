import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { App } from '../components'
const queryCache = new QueryCache()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <App>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content='GitHub Jobs Clone' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:creator' content='@pbteja1998' />
          <meta property='og:type' content='website' />
          <meta name='author' content='Bhanu Teja P' />
          <meta property='og:site_name' content='GitHub Jobs Clone' />
          <meta name='theme-color' content='#5964E0' />
          <meta
            name='description'
            content='A GitHub Jobs clone made using the design from frontendmentor.io.'
          />
          <meta property='og:title' content='GitHub Jobs Clone' />
          <meta
            property='og:description'
            content='A GitHub Jobs clone made using the design from frontendmentor.io.'
          />
          <meta property='og:url' content='https://jobs.bhanuteja.dev' />
          <meta property='twitter:title' content='GitHub Jobs' />
          <meta
            property='twitter:description'
            content='A GitHub Jobs clone made using the design from frontendmentor.io.'
          />
          <meta property='twitter:url' content='https://jobs.bhanuteja.dev' />
          <meta property='og:image' content='/preview.jpg' />
          <meta property='twitter:image' content='/preview.jpg' />
        </Head>
        <Component {...pageProps} />
      </App>
    </ReactQueryCacheProvider>
  )
}

export default MyApp
