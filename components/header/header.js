import styles from './header.module.css'
import utilStyle from '../../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>

            <Link href="/" passHref rel="noopener noreferrer">
                <Image src="/jg-logo.svg" alt="Jerry Gagliano logo" width={100} height={50}></Image>
            </Link>
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

            <Link href="https://docs.google.com/document/d/1sunyIYQNLZfWAAQq1kbRtHBX0ivRrte58iJFHFpQxuc/edit" passHref legacyBehavior>
                <a className={utilStyle.button}  target="_blank" rel="noopener noreferrer">
                    My Resume
                </a>
            </Link>
        </header>
    )
}