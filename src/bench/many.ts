import { readFile, glob, writeFile } from "node:fs/promises";
import { parse, relative } from "node:path";
import { Bench } from "tinybench";

const fixtures: string[] = new Array(10)
  .fill(
    await Array.fromAsync(glob("./fixtures/*.md"), (path) =>
      readFile(path, { encoding: "utf-8" }),
    ),
  )
  .flat();

const bench = new Bench({
  name: "many",
  time: 1000,
  warmup: true,
});

(await Array.fromAsync(glob("./src/lib/*.ts"), (path) => path)).forEach(
  (module) => {
    const moduleSpecifier = relative(import.meta.dirname, module);

    bench.add(parse(module).name, async () => {
      await (await import(moduleSpecifier)).default(fixtures);
    });
  },
);

await bench.run();

console.log(bench.name);
console.table(bench.table());
