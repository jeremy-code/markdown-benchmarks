import { glob } from "node:fs/promises";
import { basename } from "node:path";
import { fileURLToPath } from "url";
import type { ParserFunction } from "./interfaces.ts";

const libDirectory = fileURLToPath(new URL("lib", import.meta.url));

const libraries = (await Array.fromAsync(glob(`${libDirectory}/*.ts`))).map<
  [string, Promise<ParserFunction>]
>((module) => [
  basename(module, ".ts"),
  import(module).then((m) => m.default as ParserFunction),
]);

export { libraries };
