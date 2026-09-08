import init, { markdownToHtml } from "comrak-wasm";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";

import type { ParserFunction } from "../interfaces.ts";

const wasmModuleStream = createReadStream(
  fileURLToPath(import.meta.resolve("comrak-wasm/comrak_wasm_bg.wasm")),
);

await init({
  module_or_path: new Response(wasmModuleStream, {
    headers: { "Content-Type": "application/wasm" },
  }),
});

const comrakWasm: ParserFunction = (markdownFiles) => {
  return markdownFiles.map((markdownFile) => markdownToHtml(markdownFile));
};

export default comrakWasm;
