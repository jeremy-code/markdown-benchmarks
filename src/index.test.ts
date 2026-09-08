import { describe } from "node:test";
import { test } from "./___utils___/test.ts";
import { libraries } from "./index.ts";
import { expect } from "vitest";
import isHtml from "is-html";

describe("Markdown libraries", () => {
  libraries.map(async ([key, value]) => {
    test(`src/lib/${key}.ts should return valid html`, async ({
      smallMd,
      mediumMd,
      largeMd,
      repeatedMd,
    }) => {
      const outputs = (await value)([smallMd, mediumMd, largeMd, repeatedMd]);
      const resolvedOutputs = Array.isArray(outputs) ? outputs : await outputs;

      expect(
        resolvedOutputs.map((resolvedOutput) => isHtml(resolvedOutput)),
      ).not.toContain(false);
    });
  });
});
