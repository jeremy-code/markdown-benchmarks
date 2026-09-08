import MarkdownIt from "markdown-it";
import type { ParserFunction } from "../interfaces.ts";

const md = new MarkdownIt();

const markdownIt: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => md.render(markdownFile));
};

export default markdownIt;
