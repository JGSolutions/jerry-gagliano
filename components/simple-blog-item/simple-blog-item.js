import styles from './simple-blog-item.module.css'
import FormatDate from '../date';

export default function SimpleBlogItem({title, description, image, date, tags}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSection}>{title}</div>
            <div className={styles.imageSection}>
                <img src={image} />
            </div>
            <div className={styles.contentSection}>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.tags}>
                    {tags}
                </div>
                <div className={styles.date}>
                    <FormatDate dateString={date} />
                </div>
            </div>
        </div>
    )
}
