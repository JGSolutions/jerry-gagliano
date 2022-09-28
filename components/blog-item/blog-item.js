import styles from './blog-item.module.css'
import FormatDate from '../date';
import Link from 'next/link'
import { generateTagsElements } from '../../lib/utils'

export default function BlogItem({id, title, description, image, date, updatedDate, tags, author}) {
    const tagItems =  generateTagsElements(tags);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.date}>
                    by {author} - <FormatDate dateString={date} />
                </div>

                <Link href={`/posts/${id}`}>
                    <a className={styles.titleSection}>
                        <h3 className={styles.h3}>{title}</h3>
                    </a>
                </Link>

                {/* <div className={styles.updatedDate}>
                    updated: <FormatDate dateString={updatedDate} />
                </div> */}

                <Link href={`/posts/${id}`}>
                    <a className={styles.imageSectionMobile}>
                        <img src={image} alt={title}  className={styles.image}/>
                    </a>
                </Link>

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
