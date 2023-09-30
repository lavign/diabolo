import '../styles/globals.css'
import Head from 'next/head'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Diabolo</title>
        <meta name='description' content='Diabolo' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
