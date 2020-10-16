import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
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
          <meta property='og:image' content='https://jobs.bhanuteja.dev/preview.jpg' />
          <meta property='twitter:image' content='https://jobs.bhanuteja.dev/preview.jpg' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <script
            src='https://cdn.usefathom.com/script.js'
            data-site='ZMAOUWQD'
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
