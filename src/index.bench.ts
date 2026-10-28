import { libraries } from "./index.ts";
import { test } from "./___utils___/test.ts";

test("benchmark Markdown libraries", async ({
  bench,
  smallMd,
  mediumMd,
  largeMd,
  repeatedMd,
}) => {
  const markdownFiles = [smallMd, mediumMd, largeMd, repeatedMd];

  await bench.compare(
    ...libraries.map(([key, modulePromise]) =>
      bench(
        key,
        {
          ...(process.env.CI === "true"
            ? { writeResult: `./benchmarks/${key}.json` }
            : undefined),
        },
        () => modulePromise.then((module) => module(markdownFiles)),
      ),
    ),
    {
      name: "default",
      concurrency: "task",
      iterations: 32,
      warmup: true,
      warmupIterations: 4,
      warmupTime: 150,
    },
  );
});
