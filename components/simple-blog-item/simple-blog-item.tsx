import styles from './simple-blog-item.module.css'
import FormatDate from '../date';
import TagItem from '../tag/tag';
import Image from 'next/image';

export default function SimpleBlogItem({title, description, image, date, tags, id}) {
    const tagItems = tags.split(',').map((string, index) =>
        <TagItem string={string} key={index}/>
    );
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSection}>{title}</div>
            <div className={styles.imageSection}>
                <Image src={image} fill alt={title} quality={45} priority  />
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
