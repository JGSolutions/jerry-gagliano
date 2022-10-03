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
                <title>Jerry Gagliano&#39;s blog about web development and tips.</title>
                <meta name="description" content="Providing my experiences and tips in working with the web." />
            </Head>

            <div className={utilStyles.topSection}>
                <div className="container-lg">
                    <Header/>
                    <section className={styles.headerPageSection}>
                        <h1 className={utilStyles.headerPageTitle}>My Blog</h1>
                        <p className={utilStyles.headerPageSlogan}>Latest and updated news about projects, development tips and general experiences around the web.</p>
                    </section>
                </div>
            </div>

            <main style={{ height: '100vh', marginTop: '24px'}}>
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