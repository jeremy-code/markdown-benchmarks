import { renderHtml } from "@tanstack/markdown/html";

export default async (markdownFiles: string[]) => {
  markdownFiles.map((markdownFile) => renderHtml(markdownFile));
};
