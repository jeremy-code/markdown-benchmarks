import { micromark as _micromark } from "micromark";

import type { ParserFunction } from "../interfaces.ts";

const micromark: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => _micromark(markdownFile));
};

export default micromark;
