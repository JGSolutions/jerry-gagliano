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
                <title>Jerry Gagliano - Front-end developing experiences.</title>
                <meta name="description" content="Blogging about my front-end experiences and progressive web apps." />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jerry Gagliano's Blog" />
                <meta property="og:description" content="Blogging about the web." />
                <meta name="image" property="og:image" content="https://jgsolutions.ca/jerry-pic.jpeg" itemProp="image"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Jerry Gagliano's Blog" />
                <meta name="twitter:description" content="Blogging about the web." />
                <meta name="twitter:image" content="https://jgsolutions.ca/jerry-pic.jpeg" />
                <meta name="twitter:creator" content="@JGSolutions"></meta>
            </Head>

            <div className={utilStyles.topSection}>
                <div className="container-lg">
                    <Header/>
                    <section className={styles.headerPageSection}>
                        <h1 className={utilStyles.headerPageTitle}>My Blog</h1>
                        <p className={utilStyles.headerPageSlogan}>Latest and updated news about projects, development tips and web experiences.</p>
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