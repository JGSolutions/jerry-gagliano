import styles from './hero.module.css';
import Link from 'next/link'
import utilStyle from '../../styles/utils.module.css'

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <h1 className={styles.h1}>
                Hi, I&#39;m Jerry Gagliano. <br/>
                <span className={styles.heroText}>
                Bringing <span className={styles.heroTextHightlight}>ideas</span> to <span className={styles.heroTextHightlight}>reality!</span>
                </span>
            </h1>

            <p className={styles.slogan}>
                Full stack developer crafting solid and scalable frontend products with great user experiences.
            </p>

            <Link href="/blog">
                <a className={utilStyle.button} rel="noopener noreferrer">
                    Read My Blog
                </a>
            </Link>
        </section>
    )
}