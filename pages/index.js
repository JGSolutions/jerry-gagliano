import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

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
    <div className={styles.container}>
      <Head>
        <title>Jerry Gagliano - Fullstack Web Developer from Montreal</title>
        <meta name="description" content="Jerry  Gagliano is a frontend & backend developer from Montreal, Quebec. Passionate about developing apps with React, Angular, Node.js and Firebase." />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>      
        <h1>
          Hi, I'm Jerry Gagliano not your ordinary Fullstack Developer.
        </h1>

        <h3>
          With over 20 years of web development specialized in developing frontend & backend web applications bring
          ideas to reality.
        </h3>
      </main>

      <section>
        <h2>Daily tech skills</h2>
        <ul>
          <li>Angular</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Firebase</li>
          <li>HTML/CSS/Javascript</li>
        </ul>
      </section>

      <section>
        <h2>Steps from iddea To reality</h2>
        <ul>
          <li>Brainstorm</li>
          <li>Design UI in Figma</li>
          <li>Develop UI & Functionality</li>
          <li>Deploy to firebase</li>
          <li>Test, fix & iterate</li>
        </ul>
      </section>

      <section>
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
      </section>

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
