import styles from './header.module.css'
import utilStyle from '../../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'
import SideNav from '../sidenav/sidenav'
import { useState } from "react";

export default function Header() {
    const [open, setOpenPanel] = useState(false);

    return (
        <>
            <header className={styles.header}>                
                <div className={styles.logoContainer}>
                    <Link href="/" passHref rel="noopener noreferrer">
                        <Image src="/jg-logo.svg" alt="Jerry Gagliano logo" width={100} height={50} priority></Image>
                    </Link>

                    <nav className={styles.desktopNav}>
                        <ul role='list' className={styles.menu}>
                            <li>
                                <Link href="/blog" className={styles.link}>Blog</Link>
                            </li>

                            <li>
                                <Link href="/portfolio/" className={styles.link}>Portfolio</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Link href="https://docs.google.com/document/d/1sunyIYQNLZfWAAQq1kbRtHBX0ivRrte58iJFHFpQxuc" passHref className={`${utilStyle.button} ${styles.resumeButton}`}  target="_blank" rel="noopener noreferrer">
                    My Resume
                </Link>

                <button className={styles.menuButton} onClick={() => setOpenPanel(!open)}>
                    <Image
                        src="/menu.svg"
                        height={28}
                        width={32}
                        alt="menu"
                        />
                </button>
            </header>

            <SideNav open={open}>
				<div className={styles.headerPanel}>
					<button className={styles.menuButton} onClick={() => setOpenPanel(false)}>
						<Image
							src="/close.svg"
							height={28}
							width={32}
							alt="menu"
							/>
					</button>
				</div>
				<ul className={styles.menuPanelLinks}>
                    <li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
                    <li>
						<Link href="/portfolio">Portfolio</Link>
					</li>
                    <li>
						<Link href="https://docs.google.com/document/d/1sunyIYQNLZfWAAQq1kbRtHBX0ivRrte58iJFHFpQxuc">My Resume</Link>
					</li>
				</ul>
			</SideNav>
        </>
    )
}