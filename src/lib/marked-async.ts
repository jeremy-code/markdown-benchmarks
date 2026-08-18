import { marked } from "marked";

export default async (markdownFiles: string[]) => {
  await Promise.all(
    markdownFiles.map((markdownFile) => marked(markdownFile, { async: true })),
  );
};
