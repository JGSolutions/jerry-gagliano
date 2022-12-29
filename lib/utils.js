import TagItem from '../components/tag/tag';

export const generateTagsElements = (tags) => {
    return tags.split(',').map((string, index) =>
        <TagItem string={string} key={index}/>
    );
}

export function sortByDate(data) {
    return data.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}