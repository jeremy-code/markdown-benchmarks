import { readFile } from "fs/promises";
import { test as baseTest } from "vitest";

const [smallMd, mediumMd, largeMd, repeatedMd] = await Promise.all([
  readFile("./fixtures/small.md", { encoding: "utf-8" }),
  readFile("./fixtures/medium.md", { encoding: "utf-8" }),
  readFile("./fixtures/large.md", { encoding: "utf-8" }),
  readFile("./fixtures/repeated.md", { encoding: "utf-8" }),
]);

const test = baseTest
  .extend("smallMd", () => smallMd)
  .extend("mediumMd", () => mediumMd)
  .extend("largeMd", () => largeMd)
  .extend("repeatedMd", () => repeatedMd);

export { test };
