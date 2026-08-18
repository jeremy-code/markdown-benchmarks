import init, { markdownToHtml } from "comrak-wasm";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";

const wasmModuleStream = createReadStream(
  fileURLToPath(import.meta.resolve("comrak-wasm/comrak_wasm_bg.wasm")),
);

await init({
  module_or_path: new Response(wasmModuleStream, {
    headers: { "Content-Type": "application/wasm" },
  }),
});

export default async (markdownFiles: string[]) => {
  markdownFiles.map((markdownFile) => markdownToHtml(markdownFile));
  // Not actually necessary
  wasmModuleStream.close();
};
