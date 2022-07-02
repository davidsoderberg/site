import * as dosandonts from '../routes/posts/dos-and-donts.mdx'
import * as fisttwomonths from '../routes/posts/first-two-months.mdx';
import * as howibuiltmysite from '../routes/posts/how-i-built-my-site.mdx';
import * as mystack from '../routes/posts/my-stack.mdx';
import * as thefirstswedishguyatnovu from '../routes/posts/the-first-swedish-guy-at-novu.mdx';

export const posts = [
  dosandonts,
  fisttwomonths,
  howibuiltmysite,
  mystack,
  thefirstswedishguyatnovu
];

const listPosts = posts

export const getPosts = () => {
  const posts = listPosts.filter((post) => post.attributes.list);
  posts.sort((a, z) => {
    const aTime = new Date(a.attributes.date).getTime();
    const zTime = new Date(z.attributes.date).getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
  return posts.map((post) => {
    return {
      ...post,
      slug: post.filename.replace('.mdx', '')
    }
  });;
}