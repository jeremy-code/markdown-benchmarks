import { compiler } from "markdown-to-jsx/html";

export default async (markdownFiles: string[]) => {
  markdownFiles.map((markdownFile) => compiler(markdownFile));
};
