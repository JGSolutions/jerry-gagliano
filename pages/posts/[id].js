import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import FormatDate from '../../components/date';
import utilStyles from '../../styles/utils.module.css'
import styles from './post.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { generateTagsElements  } from '../../lib/utils'

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
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={postData.description} />
        <meta property="og:image" content={postData.coverImage}/>
        <meta name="og:title" content={postData.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className={utilStyles.topSection}>
        <div className="container-lg">
          <Header/>
          <section className={utilStyles.headerPageSection}>
            <h1 className={utilStyles.headerPageTitle}>{postData.title}</h1>
            <p className={utilStyles.headerPageSlogan}>
              {postData.description}
            </p>
          </section>
        </div>
        {/* <div style={{position: 'absolute'}}>
          <Image
              src={postData.coverImage}
              height={400}
              width={750}
              alt=""
            />
        </div> */}
      </div>

      <main>
        <div className="container-lg">
          <div className="row">
            <div className={`col col-sm-12 col-md-8 col-lg-8 ${styles.content}`}>
              <article className={styles.article}>
                <div className={styles.articleText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </article>
            </div>

            <div className={`col col-sm-12 col-md-4 col-lg-4 ${styles.sideContent}`}>
                <section className={styles.details}>
                  <p className={styles.authorDate}>
                    By {postData.author} / <FormatDate dateString={postData.updateDate} />
                  </p>
                  <div className={styles.tags}>
                    {tags}
                  </div>
                </section>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}