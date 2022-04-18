import { readdir, readFile } from 'fs/promises';
import { bundleMDX } from 'mdx-bundler';
const path = __dirname + '/../posts';
const defaultCwd = __dirname + '/../app/routes/posts';

const getFileContent = async (filename: string, rootPath: string = path) => {
  const file = await readFile(rootPath + '/' + filename);
  return await file.toString();
};

export const mdx = async (
  rootPath: string = path,
  cwd: string = defaultCwd
) => {
  const files = await readdir(rootPath);
  const mdxFiles = files.filter((file) => file.includes('.mdx'));
  return mdxFiles.reduce(async (prev, filePath) => {
    const list = await prev;
    const {
      frontmatter: { meta, ...rest },
    } = await compileMdx(filePath, rootPath, cwd);

    list.push({
      slug: filePath.replace('.mdx', ''),
      ...meta,
      ...rest,
    });

    return list;
  }, Promise.resolve([] as any[]));
};

export const compileMdx = async (
  filename: string,
  rootPath: string = path,
  cwd: string = defaultCwd
) => {
  // @ts-ignore
  const { default: highlight } = await import('rehype-highlight');
  // @ts-ignore
  const { default: gfm } = await import('remark-gfm');

  const fileString = await getFileContent(filename, rootPath);
  const { code, frontmatter } = await bundleMDX({
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
    frontmatter,
  };
};
