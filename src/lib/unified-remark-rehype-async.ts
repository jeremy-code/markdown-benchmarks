import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const processor = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

export default async (markdownFiles: string[]) => {
  await Promise.all(
    markdownFiles.map((markdownFile) => processor.process(markdownFile)),
  );
};
