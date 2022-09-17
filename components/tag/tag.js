import styles from './tag.module.css';

export default function TagItem({string}) {
    return (
        <div className={styles.tag}>{string}</div>
    )
}