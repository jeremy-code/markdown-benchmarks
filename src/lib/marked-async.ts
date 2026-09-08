import { marked } from "marked";
import type { ParserFunction } from "../interfaces.ts";

const markedAsync: ParserFunction = async (markdownFiles) => {
  return await Promise.all(
    markdownFiles.map((markdownFile) => marked(markdownFile, { async: true })),
  );
};

export default markedAsync;
