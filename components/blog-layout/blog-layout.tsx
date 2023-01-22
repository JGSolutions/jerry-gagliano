
import Head from 'next/head';
import FormatDate from '../../components/date';
import utilStyles from '../../styles/utils.module.css'
import styles from './post.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { generateTagsElements  } from '../../lib/utils'
import Link from 'next/link'


export default function BlogLayout({ meta, children }) {
  const tags =  generateTagsElements(meta.tags);

  const env = process.env.NODE_ENV;
  let url;
  let canonicalUrl;

  if (env === "production") {
    url ='https://jgsolutions.ca';
    canonicalUrl ='https://jgsolutions.ca';
  } else {
    url ='http://localhost:3000';
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={`${canonicalUrl}${meta.path}`} />
        <meta name="description" content={meta.description} />

        <meta property="og:url" content={`${url}${meta.path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="image" property="og:image" content={`${url}${meta.coverImage}`} itemProp="image"/>

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${url}${meta.path}`} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={`${url}${meta.coverImage}`} />
        <meta property="twitter:creator" content="@JGSolutions"></meta>

      </Head>
      
      <div className={utilStyles.topSection}>
        <div className="container-lg">
          <Header/>
          <section className={styles.headerPageSection}>
            <Link href="/blog" passHref className={utilStyles.back} rel="noopener noreferrer">
                &larr; Go Back
            </Link>
            <h1 className={utilStyles.headerPageTitle}>{meta.title}</h1>
          </section>
        </div>
      </div>

      <main>
        <div className={`container-lg ${styles.articleLayout}`}>
          <div className="row">
            <div className={`col ${styles.details}`}>
              <div className={styles.authorDetails}>
                <p className={styles.author}>By {meta.author}</p>
                <p className={styles.authorDate}>Created on: <FormatDate dateString={meta.date} /></p>
                <p className={styles.authorDate}>Updated on: <FormatDate dateString={meta.updateDate} /></p>
              </div>
              <div>
                {tags}
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col`}>
              <article className={styles.article}>
                {children}
                <div className={styles.contactSignature}>
                  <p>
                    Thank you for taking the time in reading this blog. If you find any invalid information or want to add
                    more this blog you may contact me at:
                  </p>

                  <p>
                    <a href="mailto:jerrygag@gmail.com">
                      jerrygag@gmail.com
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}