import { markdownToHTML } from "comrak";

export default async (markdownFiles: string[]) => {
  markdownFiles.map((markdownFile) => markdownToHTML(markdownFile));
};
