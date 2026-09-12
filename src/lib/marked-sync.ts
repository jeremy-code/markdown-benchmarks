import { marked } from "marked";
import type { ParserFunction } from "../interfaces.ts";

const markedSync: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => marked(markdownFile, { async: false }));
};

export default markedSync;
