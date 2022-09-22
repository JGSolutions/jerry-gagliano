import utilStyles from '../../styles/utils.module.css';
import styles from './blog.module.css';
import Head from 'next/head'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';

export default function Blog() {
    return (
        <>
            <Head>
                <title>My experiences about Web development and tips.</title>
                <meta name="description" content="Providing helpful web development content" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={utilStyles.topSection}>
                <div className="container">
                    <Header/>

                    <section className={utilStyles.headerPageSection}>
                        <h1 className={utilStyles.headerPageTitle}>My Blog</h1>
                        <p>Latest and updated news about projects, development tips and general experiences about the web.</p>
                    </section>
                </div>
            </div>

            <main style={{ height: '100vh', minHeight: '600px'}}></main>
            <Footer/>
        </>
    )
}