import styles from './portfolio-item.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioItem({name, description, image, blogLink, githubLink}) {
    function renderLink(blogLink, label) {
        if (blogLink) {
            return <Link href={blogLink}>{label}</Link>
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageSection}>
                <Image src={image} fill alt={name} quality={45} priority  />
            </div>
            <div className={styles.contentSection}>
                <div className={styles.name}>{name}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.links}>
                    {renderLink(blogLink, 'Read Blog')}
                    {renderLink(githubLink, 'GitHub')}
                </div>
            </div>
        </div>
    )
}
