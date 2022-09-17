import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContent}`}>
                <div className={styles.copyright}>Designed & Built by Jerry Gagliano</div>
                <ul className={styles.socialMedia} role='list'>
                    <li>
                        <a href="https://www.linkedin.com/in/jerry-gagliano-2501a38/?originalSubdomain=ca" target="_blank">
                            <Image
                                src="/socialmedia/linkedin.svg"
                                height={40}
                                width={40}
                                alt="jerry gagliano linkedin"
                            />
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://twitter.com/jgsolutions?lang=en" target="_blank">
                            <Image
                                src="/socialmedia/twitter.svg"
                                height={42}
                                width={42}
                                alt="jerry gagliano twitter"
                            />
                        </a>
                    </li> */}
                </ul>
            </div>
        </footer>
    )
}
