import type { ParserFunction } from "../interfaces.ts";
import { Parser, HtmlRenderer } from "commonmark";

const parser = new Parser();
const htmlRenderer = new HtmlRenderer();

const commonmark: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) =>
    htmlRenderer.render(parser.parse(markdownFile)),
  );
};

export default commonmark;
