import styles from './simple-blog-item.module.css'
import FormatDate from '../date';
import TagItem from '../tag/tag';

export default function SimpleBlogItem({title, description, image, date, tags}) {
    const tagItems = tags.split(',').map((string) =>
        <TagItem string={string}/>
    );
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
                    {tagItems}
                </div>
                <div className={styles.date}>
                    <FormatDate dateString={date} />
                </div>
            </div>
        </div>
    )
}
