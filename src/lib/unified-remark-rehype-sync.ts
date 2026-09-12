import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { ParserFunction } from "../interfaces.ts";

const processor = await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify);

const unifiedRemarkRehypeSync: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => String(processor.processSync(markdownFile)));
};

export default unifiedRemarkRehypeSync;
