import { renderHtml } from "@tanstack/markdown/html";

import type { ParserFunction } from "../interfaces.ts";

const tanstackMarkdown: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => renderHtml(markdownFile));
};

export default tanstackMarkdown;
