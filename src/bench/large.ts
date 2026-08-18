import { readFile, glob } from "node:fs/promises";
import { parse, relative } from "node:path";
import { Bench } from "tinybench";

const fixtures = [await readFile("./fixtures/large.md", { encoding: "utf-8" })];

const bench = new Bench({
  name: "large",
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
