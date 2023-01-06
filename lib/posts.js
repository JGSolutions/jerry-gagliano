import fs from 'fs';
import path from 'path';
import { sortByDate } from './utils'
import {meta} from '../lib/blog-posts'

const postsDirectory = path.join(process.cwd(), 'pages/posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');

    return {
      id,
      ...meta[id],
    };
  });

  // Sort posts by date
  return sortByDate(allPostsData);
}

export const getRecentBlogs = () => {
  const data = getSortedPostsData();

  return data.slice(0, 3);
}
