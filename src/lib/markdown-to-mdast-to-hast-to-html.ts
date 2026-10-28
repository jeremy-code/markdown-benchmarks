import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";
import type { ParserFunction } from "../interfaces.ts";

const markdownToMdastToHastToHtml: ParserFunction = (
  markdownFiles: string[],
) => {
  return markdownFiles.map((markdownFile) =>
    toHtml(toHast(fromMarkdown(markdownFile))),
  );
};

export default markdownToMdastToHastToHtml;
