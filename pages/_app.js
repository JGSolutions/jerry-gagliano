import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import GoogleAnalytics from '../components/googleAnalytics'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => gtag.pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events]);
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"></meta>
      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
