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
                <title>My experiences about Web development and tips.</title>
                <meta name="description" content="Providing helpful web development content" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={utilStyles.topSection}>
                <div className="container-lg">
                    <Header/>
                    <section className={utilStyles.headerPageSection}>
                        <h1 className={utilStyles.headerPageTitle}>My Blog</h1>
                        <p className={utilStyles.headerPageSlogan}>Latest and updated news about projects, development tips and general experiences about the web.</p>
                    </section>
                </div>
            </div>

            <main style={{ height: '100vh', marginTop: '24px'}}>
                <div className="container-lg">
                    <div className="row">
                    {allPostsData.map(({ id, date, title }) => (
                        <div className={`col col-12 ${styles.column}`} key={id}>
                            <BlogItem 
                                image="https://www.freecodecamp.org/news/content/images/size/w2000/2019/10/react-vs-angular.png"
                                title={title} 
                                author="Jerry Gagliano"
                                description="In this article, Dave Feldman shares his lessons learned and the experiments has done as a multidisciplinary designer-founder-" 
                                tags="CSS,HTML"
                                date="Feb 22, 2022"
                                updatedDate="Feb 25, 2022" />
                        </div>
                    ))}
                    </div>
                </div>
    
            </main>
            <Footer/>
        </>
    )
}