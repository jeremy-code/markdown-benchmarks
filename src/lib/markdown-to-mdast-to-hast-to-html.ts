import { fromMarkdown } from "mdast-util-from-markdown";
import { toHast } from "mdast-util-to-hast";
import { toHtml } from "hast-util-to-html";

export default async (markdownFiles: string[]) => {
  markdownFiles.map((markdownFile) =>
    toHtml(toHast(fromMarkdown(markdownFile))),
  );
};
