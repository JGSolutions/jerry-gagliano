import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import GoogleAnalytics from '../components/googleAnalytics'

function MyApp({ Component, pageProps }) {
  <GoogleAnalytics />
  return <Component {...pageProps} />
}

export default MyApp
