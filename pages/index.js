import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
// import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Header  from '../components/header/header';
import HeroSection from '../components/hero/hero'
import TechStackItem from '../components/tech-stack-item/tech-stack-item'
import Button from '../components/button/button'
import Footer from '../components/footer/footer'
// import { useRef, useEffect, useState } from 'react';


export default function Home() {
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
        <title>Jerry Gagliano - Fullstack Web Developer from Montreal</title>
        <meta name="description" content="Jerry Gagliano fullstack developer from Montreal. Passionate about developing apps with React, Angular, Node.js and Firebase." />
      </Head>

      {/* header and hero sections --> */}
      <div className={utilStyles.topSection}>
        <div className="container-lg">
          <Header/>
          <HeroSection/>
        </div>
      </div>

      <main className={styles.main}>
        <section style={{ width: '100%', marginBottom: '60px'}}>
          <div className="container-lg">
            <div className="row">
              <div className="col">
                <h2 className={styles.h2}>Over the past 15 years,</h2>

                <p className={utilStyles.paragraph}>
                  of experience in web development and building interfaces and tools for various companies. 
                  Started my career as a frontend and backend developer. As Javascript frameworks became in demand, my interest 
                  grew more towards building UI and single page applications.
                </p>

                <p className={utilStyles.paragraph}>
                  Currently a senior frontend developer at Sportlogiq, the industry leader for NHL hockey data-collection and advanced analytics.
                  I maintain and build UI features on their Analytics web platform based on the lastest Angular.
                </p>

              </div>
            </div>
          </div>
        </section>

        <section style={{ width: '100%', marginBottom: '60px'}}>
          <div className="container-lg">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>UX/UI</h3>
                  <p className={utilStyles.paragraph}>
                    Not 100% designer but understand the design patterns. Capable of designing an
                    interface and bringing those ideas on a canvas.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>Frontend</h3>
                  <p className={utilStyles.paragraph}>
                    Building client-side applications with modern features and maintain semantic coding style
                    among other best practices for SEO optimisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className={styles.skillContainer}>
                  <h3 className={styles.skillHeader}>Backend</h3>
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

        <section style={{ width: '100%', marginBottom: '60px'}}>
          <div className="container-lg">
            <div className="row">
              <div className="col">
                <h2 className={styles.h2}>Tech Stacks I Use</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem name="Angular" image="angular-logo.svg" description="Front-end framework creating spa complex web apps." url="https://angular.io" level="90%"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem name="Firebase" image="firebase-logo.svg" description="Platform for hosting web apps and NoSQL data managment." url="https://firebase.google.com" level="95%"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem name="Node.js" image="nodejs-logo.svg" description="Create apis, manage data and heavy logic computations. " url="https://nodejs.org" level="90%"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem 
                name="RxJS" 
                image="rxjs.svg" 
                description="Reactive programming using observables. Easier to compose asynchronous calls." 
                url="https://rxjs.dev/" 
                level="80%"/>
              </div>
              <div className="col-xs-6 col-md-6 col-lg-4">
                <TechStackItem 
                name="Next.js" 
                image="next-js.svg" 
                description="React based framework generating server and static websites." 
                url="https://nextjs.org/" 
                level="70%"/>
              </div>
            </div>
          </div>
        </section> 

        <section className={styles.contactSection}>
          <div className={styles.contact}>
            <div>
              <p>What&#39;s next</p>
              <h1 className={styles.contactHeader}>Get In Touch!</h1>
            </div>

            <p className={utilStyles.paragraph}>
              Always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <Link href="mailto:jerrygag@gmail.com" passHref>
                <a className={utilStyles.button} rel="noopener noreferrer">
                  Let&#39;s Talk
                </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
