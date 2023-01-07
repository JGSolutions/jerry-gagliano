import utilStyles from '../../styles/utils.module.css';
import styles from './portfolio.module.css';
import Head from 'next/head'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import PortfolioItem  from '../../components/portfolio-item/portfolio-item';

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Jerry Gagliano - Portfolio</title>
                <meta name="description" content="My portfolio of various web projects that I worked on that includes websites and progressive web apps." />
                <link rel="canonical" href="https://jgsolutions.ca/portfolio/" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jerry Gagliano's Portfolio" />
                <meta property="og:description" content="Portfolio of various web projects" />
                <meta name="image" property="og:image" content="https://jgsolutions.ca/jerry-pic.jpeg" itemProp="image"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Jerry Gagliano's Portfolio" />
                <meta name="twitter:description" content="Portfolio of various web projects" />
                <meta name="twitter:image" content="https://jgsolutions.ca/jerry-pic.jpeg" />
                <meta name="twitter:creator" content="@JGSolutions"></meta>
            </Head>

            <div className={utilStyles.topSection}>
                <div className="container-lg">
                    <Header/>
                    <section className={styles.headerPageSection}>
                        <h1 className={utilStyles.headerPageTitle}>Portfolio</h1>
                        <p className={utilStyles.headerPageSlogan}>Check out some of web projects from simple websites to progressive web apps.</p>
                    </section>
                </div>
            </div>

            <main className={styles.main}>
                <div className="container-lg">
                    <div className="row">
                        <div className={`col-12 col-sm-12 ${styles.col}`}>
                            <PortfolioItem 
                                image="/posts/fitvit/fitvit.jpeg"
                                name="FitVit" 
                                description="Fitness website containing workout programs and tips helping people staying motivated and healthy." 
                                blogLink="/posts/fitvitfitness-portfolio/" 
                                websiteLink="https://www.fitvitfitness.com" 
                                githubLink="" />
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer/>
        </>
    )
}