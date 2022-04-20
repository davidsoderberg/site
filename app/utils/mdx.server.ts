import { readdir, readFile } from 'fs/promises';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import matter from 'gray-matter';
const path = __dirname + '/../posts';
const defaultCwd = __dirname + '/../app/routes/posts';

const getFileContent = async (filename: string, rootPath: string = path) => {
  const file = await readFile(rootPath + '/' + filename);
  return await file.toString();
};

export const mdx = async (rootPath: string = path) => {
  const files = await readdir(rootPath);
  const mdxFiles = files.filter((file) => file.includes('.mdx'));
  return mdxFiles.reduce(async (prev, filePath) => {
    const list = await prev;
    const content = await getFileContent(filePath, rootPath);
    const res = matter(content);

    list.push({
      slug: filePath.replace('.mdx', ''),
      ...res.data,
    });

    return list;
  }, Promise.resolve([] as any[]));
};

export const compileMdx = async (
  filename: string,
  rootPath: string = path,
  cwd: string = defaultCwd
) => {
  try {
    // @ts-ignore
    const { default: highlight } = await import('rehype-highlight');
    // @ts-ignore
    const { default: gfm } = await import('remark-gfm');

    const fileString = await getFileContent(filename, rootPath);
    const { code, frontmatter, matter } = await bundleMDX({
      source: fileString,
      cwd,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), gfm];
        options.rehypePlugins = [...(options.rehypePlugins ?? []), highlight];

        return options;
      },
    });

    return {
      code,
      frontmatter: {
        ...frontmatter,
        readingTime: readingTime(matter.content),
      },
    };
  } catch (e) {
    return getNotFound();
  }
};

export const getNotFound = async () => {
  const { code, frontmatter }: any = await compileMdx('not-found.mdx');
  return {
    frontmatter: {
      ...frontmatter,
      date: new Date().toISOString(),
      status: 404,
    },
    code,
  };
};
