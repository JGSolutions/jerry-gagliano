import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Header  from '../components/header/header';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Jerry Gagliano - Fullstack Web Developer from Montreal</title>
        <meta name="description" content="Jerry Gagliano fullstack developer from Montreal, Quebec. Passionate about developing apps with React, Angular, Node.js and Firebase." />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header and hero sections --> */}
      <div className={styles.topSection}>
        <div class="container">
          <Header/>
          <section className={styles.heroSection}>
            <h1 className={styles.h1}>
              Hi, I'm Jerry Gagliano. <br/>
              <span className={styles.heroText}>
                Bringing <span className={styles.heroTextHightlight}>ideas</span> to <span className={styles.heroTextHightlight}>reality!</span>
              </span>
            </h1>
            <p className={styles.slogan}>
              Full stack developer crafting solid and scalable frontend products with great user experiences.
            </p>
          </section>
        </div>
      </div>
      {/* <div class="container">
        <div class="row">
          <div class="col">

          </div>
        </div>
      </div> */}

      <main className={styles.main}>      
       
      </main>

    
      {/* <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
