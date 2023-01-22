import utilStyles from '../../styles/utils.module.css';
import styles from './blog.module.css';
import Head from 'next/head'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import BlogItem from '../../components/blog-item/blog-item';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }) {
    return (
        <>
            <Head>
                <title>Jerry Gagliano - Blogs about Front-end web development.</title>
                <meta name="description" content="Front-end web development blogs containing articles about websites, web app development, and tips for newly skilled developers." />
                <link rel="canonical" href="https://www.jgsolutions.ca/blog/" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jgsolutions.ca/blog/" />
                <meta property="og:title" content="Jerry Gagliano's Blog" />
                <meta property="og:description" content="Front-end development blogs containing articles about websites, web app development, and tips for newly skilled developers." />
                <meta name="image" property="og:image" content="https://jgsolutions.ca/jerry-pic.jpeg" itemProp="image"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.jgsolutions.ca/blog/" />
                <meta name="twitter:title" content="Jerry Gagliano's Blog" />
                <meta name="twitter:description" content="Front-end development blogs containing articles about websites, web app development, and tips for newly skilled developers." />
                <meta name="twitter:image" content="https://www.jgsolutions.ca/jerry-pic.jpeg" />
                <meta name="twitter:creator" content="@JGSolutions"></meta>
            </Head>

            <div className={utilStyles.topSection}>
                <div className="container-lg">
                    <Header/>
                    <section className={styles.headerPageSection}>
                        <h1 className={utilStyles.headerPageTitle}>Front-end Web Development Blog</h1>
                        <p className={utilStyles.headerPageSlogan}>
                            Blogging articles about front-end web development and various web technologies. Providing tips for web developers
                            and website owners on ways to improve their site.
                        </p>
                    </section>
                </div>
            </div>

            <main className={styles.main}>
                <div className="container-lg">
                    <div className="row">
                    {allPostsData.map(({ id, date, updateDate, title, tags, author, description, coverImage }) => (
                        <div className={`col col-12 ${styles.column}`} key={id}>
                            <BlogItem 
                                id={id}
                                image={coverImage}
                                title={title} 
                                author={author}
                                description={description}
                                tags={tags}
                                date={date}
                                updatedDate={updateDate} />
                        </div>
                    ))}
                    </div>
                </div>
    
            </main>
            <Footer/>
        </>
    )
}