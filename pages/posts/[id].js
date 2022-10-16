import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import FormatDate from '../../components/date';
import utilStyles from '../../styles/utils.module.css'
import styles from './post.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { generateTagsElements  } from '../../lib/utils'
import Link from 'next/link'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const tags =  generateTagsElements(postData.tags);

  const env = process.env.NODE_ENV;
  let url;
  if (env === "production") {
    url ='https://jgsolutions.ca';
  } else {
    url ='http://localhost:3000';
  }

  return (
    <div>
      <Head>
        <title>{postData.title}</title>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jgsolutions.ca" />
        <meta property="twitter:url" content={`${url}${postData.path}`} />
        <meta property="twitter:title" content={postData.title} />
        <meta property="twitter:description" content={postData.description} />
        <meta property="twitter:image" content={`${url}${postData.coverImage}`} />
        <meta property="twitter:creator" content="@JGSolutions"></meta>
        
        <meta property="og:url" content={`${url}${postData.path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta name="image" property="og:image" content={`${url}${postData.coverImage}`} itemprop="image"/>


      </Head>
      
      <div className={utilStyles.topSection}>
        <div className="container-lg">
          <Header/>
          <section className={styles.headerPageSection}>
            <Link href="/blog" passHref>
              <a className={utilStyles.back} rel="noopener noreferrer">
                &larr; Go Back
              </a>
            </Link>
            <h1 className={utilStyles.headerPageTitle}>{postData.title}</h1>
          </section>
        </div>
      </div>

      <main>
        <div className={`container-lg ${styles.articleLayout}`}>
          <div className="row">
            <div className={`col ${styles.details}`}>
              <div className={styles.authorDetails}>
                <p className={styles.author}>By {postData.author}</p>
                <p className={styles.authorDate}><FormatDate dateString={postData.updateDate} /></p>
              </div>
              <div>
                {tags}
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col`}>
              <article className={styles.article}>
                <div className={styles.articleText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              
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