import styles from './tech-stack-item.module.css';
import Link  from 'next/link';

export default function TechStackItem({name, image, description, url, level}) {
    return (
        <div className={styles.section}>
            <img src={'/skills/' + image} width="40" />
            <h3>{name}</h3>

            <p className={styles.description}>
                {description}
            </p>

            <div className={styles.progress}>
                <div className={styles.level} style={{ width: level }}></div>
            </div>

            <Link href={url}>
                <a className={styles.url}>{url}</a>
            </Link>
        </div>
    )
}