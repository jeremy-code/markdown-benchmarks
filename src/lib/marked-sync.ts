import { marked } from "marked";

export default async (markdownFiles: string[]) => {
  markdownFiles.map((markdownFile) => marked(markdownFile, { async: false }));
};
