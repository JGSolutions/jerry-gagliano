import styles from './header.module.css'
import utilStyle from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/jg-logo.svg"></img>
                {/* <nav className={styles.nav}>
                    <ul role='list' className={styles.menu}>
                        <li>
                            <Link href="https://fitvitfitness.com">
                                <a className={styles.link}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://fitvitfitness.com">
                                <a className={styles.link}>
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://fitvitfitness.com">
                                <a className={styles.link}>
                                    Uses
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav> */}
            </div>

            <Link href="CV.pdf" passHref>
                <a className={utilStyle.button}  target="_blank" rel="noopener noreferrer">
                    My Resume
                </a>
            </Link>
        </header>
    )
}