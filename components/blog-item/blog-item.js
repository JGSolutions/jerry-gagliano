import styles from './blog-item.module.css'
import FormatDate from '../date';
import TagItem from '../tag/tag';

export default function BlogItem({title, description, image, date, updatedDate, tags, author}) {
    const tagItems = tags.split(',').map((string, index) =>
        <TagItem string={string} key={index}/>
    );
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.date}>
                    by {author} -  <FormatDate dateString={date} />
                </div>

                <h3 className={styles.titleSection}>{title}</h3>

                <div className={styles.updatedDate}>
                    updated: <FormatDate dateString={updatedDate} />
                </div>

                <div className={styles.imageSectionMobile}>
                    <img src={image} alt={title}  className={styles.image}/>
                </div>

                <div className={styles.description}>
                    {description}
                </div>

                <div className={styles.tags}>
                    {tagItems}
                </div>
            </div>

            <div className={styles.imageSection}>
                <img src={image} alt={title} className={styles.image}/>
            </div>
        </div>
    )
}
