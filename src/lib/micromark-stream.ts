import { stream } from "micromark/stream";

import { Readable } from "node:stream";

import type { ParserFunction } from "../interfaces.ts";

const micromarkStream: ParserFunction = async (markdownFiles) => {
  return await Promise.all(
    markdownFiles.map((markdownFile) => {
      return new Promise<string>((resolve) => {
        let result = "";
        Readable.fromWeb(new Blob([markdownFile]).stream())
          .pipe(stream())
          .on("data", (chunk: string) => {
            result += chunk;
          })
          .on("end", () => {
            resolve(result);
          });
      });
    }),
  );
};

export default micromarkStream;
