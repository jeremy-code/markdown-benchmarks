import { markdownToHTML } from "comrak";
import type { ParserFunction } from "../interfaces.ts";

const comrak: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => markdownToHTML(markdownFile));
};

export default comrak;
