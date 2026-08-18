import { micromark } from "micromark";

export default async (markdownFiles: string[]) => {
  markdownFiles.map((markdownFile) => micromark(markdownFile));
};
