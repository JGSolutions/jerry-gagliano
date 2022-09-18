import styles from './tech-stack-item.module.css';
import Link  from 'next/link';

export default function TechStackItem({name, image, description, url, level}) {
    return (
        <div className={styles.section}>
            <img src={'/skills/' + image} width="40" height="40" alt={name}/>

            <h3>{name}</h3>

            <p className={styles.description}>
                {description}
            </p>

            <div className={styles.levelContainer}>
                <p className={styles.levelHeader}>Skill level ({level}%)</p>
                <div className={styles.progress}>
                    <div className={styles.levelProgress} style={{ width: level }}></div>
                </div>
            </div>

            <Link href={url}>
                <a className={styles.url}>{url}</a>
            </Link>
        </div>
    )
}