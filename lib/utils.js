import TagItem from '../components/tag/tag';

export const generateTagsElements = (tags) => {
    return tags.split(',').map((string, index) =>
        <TagItem string={string} key={index}/>
    );
}