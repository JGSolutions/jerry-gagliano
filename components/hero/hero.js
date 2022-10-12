import styles from './hero.module.css';
import Link from 'next/link'
import Image from 'next/image'
import utilStyle from '../../styles/utils.module.css'

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div>
                <h1 className={styles.h1}>
                    Hi, I&#39;m Jerry Gagliano. <br/>
                    <span className={styles.heroText}>
                    Bringing <span className={styles.heroTextHightlight}>ideas</span> to <span className={styles.heroTextHightlight}>reality!</span>
                    </span>
                </h1>

                <p className={styles.slogan}>
                    Full stack developer crafting solid and scalable front-end Progressive Web Apps.
                </p>

                <Link href="/blog">
                    <a className={utilStyle.button} rel="noopener noreferrer">
                        Read My Blog
                    </a>
                </Link>
            </div>

            <div className={styles.profileWrapper}>
                <Image
                    src="/jerry-pic.jpeg"
                    className={styles.profilePic}
                    height={207}
                    width={207}
                    alt="jerry gagliano"
                />
            </div>
        </section>
    )
}