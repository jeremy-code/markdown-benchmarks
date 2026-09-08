import { compiler } from "markdown-to-jsx/html";
import type { ParserFunction } from "../interfaces.ts";

const markdownToJsx: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => compiler(markdownFile));
};

export default markdownToJsx;
