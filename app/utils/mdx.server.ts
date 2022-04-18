import { readdir, readFile } from 'fs/promises';
import { bundleMDX } from 'mdx-bundler';
const path = __dirname + '/../content';

export const mdx = async () => {
  const files = await readdir(path);
  const mdxFiles = files.filter((file) => file.includes('.mdx'));
  return mdxFiles.reduce(async (prev, filePath) => {
    const list = await prev;
    const {
      frontmatter: { meta, ...rest },
    } = await compileMdx(filePath);

    list.push({
      slug: filePath.replace('.mdx', ''),
      ...meta,
      ...rest,
    });

    return list;
  }, Promise.resolve([] as any[]));
};

export const compileMdx = async (filename: string) => {
  // @ts-ignore
  const { default: myRehypePlugin } = await import('rehype-highlight');
  // @ts-ignore
  const { default: gfm } = await import('remark-gfm');  

  const file = await readFile(path + '/' + filename);
  const fileString = await file.toString();
  const { code, frontmatter } = await bundleMDX({
    source: fileString,
    cwd: __dirname + '/../app/routes/posts',
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), gfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        myRehypePlugin,
      ];

      return options;
    },
  });

  return {
    code,
    frontmatter,
  };
};
