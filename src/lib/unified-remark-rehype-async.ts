import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { ParserFunction } from "../interfaces.ts";

const processor = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

const unifiedRemarkRehypeAsync: ParserFunction = async (
  markdownFiles: string[],
) => {
  return await Promise.all(
    markdownFiles.map((markdownFile) =>
      processor.process(markdownFile).then((file) => String(file)),
    ),
  );
};

export default unifiedRemarkRehypeAsync;
