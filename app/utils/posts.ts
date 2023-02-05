import * as dosandonts from '../routes/posts/dos-and-donts.mdx';
import * as fisttwomonths from '../routes/posts/first-two-months.mdx';
import * as howibuiltmysite from '../routes/posts/how-i-built-my-site.mdx';
import * as mystack from '../routes/posts/my-stack.mdx';
import * as thefirstswedishguyatnovu from '../routes/posts/the-first-swedish-guy-at-novu.mdx';
import * as firstfivemonths from '../routes/posts/five-months-of-remote-work.mdx';
import * as aweekincypruswithnovu from '../routes/posts/a-week-in-cyprus-with-novu.mdx';
import * as twotimesinisraelpart1 from '../routes/posts/two-times-in-israel-part-1.mdx';
import * as twotimesinisraelpart2 from '../routes/posts/two-times-in-israel-part-2.mdx';

export const posts = [
  dosandonts,
  fisttwomonths,
  howibuiltmysite,
  mystack,
  thefirstswedishguyatnovu,
  firstfivemonths,
  aweekincypruswithnovu,
  twotimesinisraelpart1,
  twotimesinisraelpart2
];

const listPosts = posts;

export const getPosts = (filter: boolean = true) => {
  let posts = listPosts;
  if(filter) {
    posts = posts.filter((post) => post.attributes.list);
  }
  posts.sort((a, z) => {
    const aTime = new Date(a.attributes.date).getTime();
    const zTime = new Date(z.attributes.date).getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });
  return posts.map((post) => {
    return {
      ...post,
      slug: post.filename.replace('.mdx', ''),
    };
  });
};
