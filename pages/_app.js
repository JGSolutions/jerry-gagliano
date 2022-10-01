import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import GoogleAnalytics from '../components/googleAnalytics'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"></meta>
    <GoogleAnalytics />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
