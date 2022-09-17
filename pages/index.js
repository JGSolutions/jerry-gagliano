import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Header  from '../components/header/header';
import HeroSection from '../components/hero/hero'
import TechStackItem from '../components/tech-stack-item/tech-stack-item'
import Button from '../components/button/button'
import Footer from '../components/footer/footer'
import SimpleBlogItem from '../components/simple-blog-item/simple-blog-item'

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
        <div className="container">
          <Header/>
          <HeroSection/>
        </div>
      </div>

      <main className={styles.main}> 
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>UX/UI</h3>
                  <p>
                    Not 100% designer but understand the design patterns. Capable of designing an
                    interface and bringing those ideas on a canvas.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>Frontend</h3>
                  <p>
                    Build client-side applications with modern features and maintain semantic coding style
                    among other best practices for SEO optimisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>Backend</h3>
                  <p>
                    Build scalable and maintainable apis using modern technology stacks such as Node.js, Express, and Firebase Cloud Functions.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.skillContainer}>
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
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className={styles.h2}>Frameworks and Libraries I Use</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem name="Angular" image="angular-logo.svg" description="Front-end framework creating spa complex web apps." url="https://angular.io" level="90%"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem name="Firebase" image="firebase-logo.svg" description="Platform for hosting web apps and NoSQL data managment." url="https://firebase.google.com" level="85%"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem name="Node.js" image="nodejs-logo.svg" description="Create apis, manage data and heavy logic computations. " url="https://nodejs.org" level="80%"/>
              </div>
            </div>
          </div>
        </section> 

        <section className={styles.contactSection}>
          <div className={styles.contact}>
            <div>
              <p>What's next</p>
              <h1 className={styles.contactHeader}>Get In Touch!</h1>
            </div>

            <p>
              Always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <Button>Let's Talk</Button>
          </div>
        </section>

        {/* <div style={{ width: '370px'}}>
          <SimpleBlogItem 
          title="Angular vs React"
          date="Sat Sep 22 2022"
          tags="css,html"
          image="https://cdn-images-1.medium.com/max/1024/0*1MDT8N8E9HuYG7tV"
          description="Interesting debate developers face between when developing a web product">

          </SimpleBlogItem>
        </div> */}
      </main>

      <Footer/>
    
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

    </div>
  )
}
