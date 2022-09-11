import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Header  from '../components/header/header';
import HeroSection from '../components/hero/hero'
import TechStackItem from '../components/tech-stack-item/tech-stack-item'

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
          <HeroSection/>
        </div>
      </div>

      <main className={styles.main}> 
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div>
                  <h3 className={styles.skillHeader}>UX/UI</h3>
                  <p>
                    Not 100% designer but understand the design patterns. Capable of designing an
                    interface and bringing those ideas on a canvas.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div style={{ marginBottom: '16px'}}>
                  <h3 className={styles.skillHeader}>Frontend</h3>
                  <p>
                    Build client-side applications with modern features and maintain semantic coding style
                    among other best practices for SEO optimisation.
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div>
                  <h3 className={styles.skillHeader}>Backend</h3>
                  <p>
                    Build scalable and maintainable apis using modern technology stacks such as Node.js, Express, and Firebase Cloud Functions.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <h3 className={styles.skillHeader}>Deploy</h3>
                  <p>
                    Maintaining the life cycle of a web product. Creating CI pipelines, tests, cloud environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ width: '100%', marginTop: '60px'}}>
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 className={styles.h2}>Frameworks & Libraries I Use</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <TechStackItem name="Angular" image="angular-logo.svg" description="dsdksk" url="https://angular.io"/>
              </div>
              <div class="col-4">
                <TechStackItem name="Firebase" image="angular-logo.svg" description="dsdksk" url="https://firebase.google.com"/>
              </div>
              <div class="col-4">
                <TechStackItem name="Angular" image="angular-logo.svg" description="dsdksk" url="https://angular.io" level="50%"/>
              </div>
            </div>
          </div>
        </section> 
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
