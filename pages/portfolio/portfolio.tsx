import utilStyles from '../../styles/utils.module.css';
import styles from './portfolio.module.css';
import Head from 'next/head'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Jerry Gagliano - </title>
                <meta name="description" content="" />

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
                    </div>
                </div>
    
            </main>
            <Footer/>
        </>
    )
}