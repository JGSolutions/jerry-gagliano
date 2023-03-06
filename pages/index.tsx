import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Header  from '../components/header/header';
import HeroSection from '../components/hero/hero'
import TechStackItem from '../components/tech-stack-item/tech-stack-item'
import Footer from '../components/footer/footer'
import { getRecentBlogs } from '../lib/posts'
import SimpleBlogItem from '../components/simple-blog-item/simple-blog-item'
// import { useRef, useEffect, useState } from 'react';

export async function getStaticProps() {
  const getRecentPosts = await getRecentBlogs();
  return {
    props: {
      getRecentPosts,
    },
  };
}

export default function Home({ getRecentPosts }) {
  // const myRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         updateMyElementIsVisible(entry.isIntersecting);
  //       }
  //     });
  //   });

  //   observer.observe(myRef.current);
  // }, []);

  // const [myElementIsVisible, updateMyElementIsVisible] = useState();
  return (
    <div>
      <Head>
        <title>Jerry Gagliano - Front-end Web Developer from Montreal</title>
        <meta name="description" content="A passionate front-end and PWA develop. Building regular websites and Progressive Web Applications that brings ideas to reality." />
        <link rel="canonical" href="https://jgsolutions.ca/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jgsolutions.ca/" />
        <meta property="og:title" content="Front-end & PWA Web Developer" />
        <meta property="og:description" content="A passionate front-end and PWA develop. Building regular websites and Progressive Web Applications that brings ideas to reality." />
        <meta name="image" property="og:image" content="https://jgsolutions.ca/jerry-pic.jpeg" itemProp="image"/>

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jgsolutions.ca/" />
        <meta name="twitter:title" content="Front-end Web Developer" />
        <meta name="twitter:description" content="A passionate front-end and PWA develop. Building regular websites and Progressive Web Applications that brings ideas to reality." />
        <meta name="twitter:image" content="https://jgsolutions.ca/jerry-pic.jpeg" />
        <meta name="twitter:creator" content="@JGSolutions"></meta>
      </Head>

      {/* header and hero sections --> */}
      <div className={utilStyles.topSection}>
        <div className="container-lg">
          <Header/>
          <HeroSection/>
        </div>
      </div>

      <main className={styles.main}>
        <section>
          <div className="container-lg">
            <div className="row">
              <div className="col">
                <h2 className={styles.h2}>Over 15 years,</h2>

                <p className={utilStyles.paragraph}>
                  of experience in web development, building interfaces and tools for various companies or projects. 
                  Started my career as a fullstack web developer. As Javascript frameworks became in demand and popular, my interest 
                  grew more towards a front-end developer, building UI experiences with progressive web apps.
                </p>

                <p className={utilStyles.paragraph}>
                  Currently a senior front-end developer at Sportlogiq, the industry leader for NHL hockey data-collection and advanced analytics.
                  I maintain and build UI features on their analytics web platform based on the lastest Angular framework.
                </p>

              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-lg">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>UX/UI</h3>
                  <p className={utilStyles.paragraph}>
                    Not 100% designer but understand the design patterns. Capable of designing an
                    interface bringing ideas on a canvas.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>Front-end</h3>
                  <p className={utilStyles.paragraph}>
                    Building SPA client-side applications with modern features like PWAs and while maintaining 
                    semantic coding style among other best practices for SEO optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>Back-end</h3>
                  <p className={utilStyles.paragraph}>
                    Capable of buildng scalable and maintainable apis using modern technology stacks such as Node.js, Express, and Firebase Cloud Functions.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>Deployments</h3>
                  <p className={utilStyles.paragraph}>
                    Maintaining the life cycle of a digital product. Creating CI pipelines, tests, cloud environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-lg">
            <div className="row">
              <div className="col">
                <h2 className={styles.h2}>Tech Stacks I Use</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6 col-lg-6">
                <TechStackItem name="Angular" image="angular-logo.svg" description="Front-end framework creating spa complex web apps." url="https://angular.io" level="90"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-6">
                <TechStackItem name="Firebase" image="firebase-logo.svg" description="Platform for hosting web apps and NoSQL data management." url="https://firebase.google.com" level="95"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-6">
                <TechStackItem name="Node.js" image="nodejs-logo.svg" description="Create apis, manage data with heavy logic computations. " url="https://nodejs.org" level="90"/>
              </div>
              {/* <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem 
                name="RxJS" 
                image="rxjs.svg" 
                description="Reactive programming using observables. Easier to compose asynchronous calls." 
                url="https://rxjs.dev/" 
                level="90"/>
              </div> */}
              <div className="col-xs-6 col-md-6 col-lg-6">
                <TechStackItem 
                name="Next.js" 
                image="next-js.svg" 
                description="React based framework generating server and static websites." 
                url="https://nextjs.org/" 
                level="80"/>
              </div>
            </div>
          </div>
        </section> 

        <section>
          <div className="container-lg" style={{gap: 0}}>
            <div className="row">
              <div className="col">
                <h2 className={styles.h2}>Recent Blogs</h2>
              </div>
            </div>

            <div className="row">
              {getRecentPosts.map(({ id, date, title, description, coverImage, tags }) => (
                <div className={`col col-lg-4 col-xl-4 col-12 ${styles.col}`} key={id}>
                  <Link href={`/posts/${id}`} className={styles.blogItem}>
                    <SimpleBlogItem 
                      id={id}
                      image={coverImage}
                      title={title}
                      tags={tags}
                      description={description}
                      date={date} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
				</section>

        <section className={styles.contactSection}>
          <div className={styles.contact}>
            <div>
              <p>What&#39;s next</p>
              <h2 className={styles.contactHeader}>Get In Touch!</h2>
            </div>

            <p className={utilStyles.paragraph}>
              Always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <Link href="mailto:jerrygag@gmail.com" passHref className={utilStyles.button} rel="noopener noreferrer">
              Let&#39;s Talk
            </Link>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
