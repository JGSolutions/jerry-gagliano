import Head from 'next/head'
// import Image from 'next/image'
import styles from './layout.module.css'
// import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content=""/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main>{children}</main>

      <Footer></Footer>
    </div>
  )
}