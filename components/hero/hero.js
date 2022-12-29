import styles from './hero.module.css';
import Link from 'next/link'
import Image from 'next/image'
import utilStyle from '../../styles/utils.module.css'

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.headingsWrapper}>
                <h1 className={styles.h1}>
                    Hi, I&#39;m Jerry Gagliano. <br/>
                    <span className={styles.heroText}>
                        A <span className={styles.heroTextHightlight}>Front-end</span> Web <span className={styles.heroTextHightlight}>Developer</span>
                    </span>
                </h1>

                <p className={styles.slogan}>
                    Front-end web developer crafting solid progressive web apps with great user experiences.
                </p>

                <Link href="/blog" className={utilStyle.button} rel="noopener noreferrer">
                    Read My Blog
                </Link>
            </div>

            <div className={styles.profileWrapper}>
                <Image
                    src="/jerry-pic.jpeg"
                    className={styles.profilePic}
                    height={230}
                    width={230}
                    priority
                    alt="jerry gagliano"
                />
            </div>
        </section>
    )
}