import styles from './blog-item.module.css'
import FormatDate from '../date';
import TagItem from '../tag/tag';

export default function BlogItem({title, description, image, date, tags, author}) {
    const tagItems = tags.split(',').map((string, index) =>
        <TagItem string={string} key={index}/>
    );
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.date}>
                    {author} <FormatDate dateString={date} />
                </div>

                <div className={styles.titleSection}>{title}</div>

                <div className={styles.description}>
                    {description}
                </div>

                <div className={styles.tags}>
                    {tagItems}
                </div>
            </div>

            <div className={styles.imageSection}>
                <img src={image} alt={title}/>
            </div>
        </div>
    )
}
