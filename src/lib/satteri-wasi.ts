import { markdownToHtml } from "satteri-wasi";
import type { ParserFunction } from "../interfaces.ts";

const satteriWasi: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => markdownToHtml(markdownFile).html);
};

export default satteriWasi;
