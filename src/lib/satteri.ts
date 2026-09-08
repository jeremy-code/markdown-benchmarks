import { markdownToHtml } from "satteri";
import type { ParserFunction } from "../interfaces.ts";

const satteri: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => markdownToHtml(markdownFile).html);
};

export default satteri;
