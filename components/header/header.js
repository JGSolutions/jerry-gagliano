import styles from './header.module.css'
import Link from 'next/link'
import Button from '../button/button'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/jg-logo.svg"></img>
                <nav className={styles.nav}>
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
                </nav>
            </div>

            <Button>My Resume</Button>
        </header>
    )
}