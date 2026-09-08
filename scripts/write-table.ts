import { tablemark } from "tablemark";

//github.com/vitest-dev/vitest/blob/d9ea973140d267ca4702deb32aa35c0afb960e52/packages/vitest/src/node/reporters/renderers/benchmark-table.ts#L17
function formatBenchNumber(number: number): string {
  const res = String(number.toFixed(number < 100 ? 4 : 2)).split(".");
  return (
    res[0]!.replace(/(?=(?:\d{3})+$)\B/g, ",") + (res[1] ? `.${res[1]}` : "")
  );
}

const table = tablemark(
  // https://github.com/vitest-dev/vitest/blob/d9ea973140d267ca4702deb32aa35c0afb960e52/packages/vitest/src/node/reporters/renderers/benchmark-table.ts
  (
    await import("../test-output.json", { with: { type: "json" } })
  ).default.testResults[0]!.assertionResults[0]!.benchmarks[0]!.tasks.map(
    (task) => ({
      name: task.name,
      hz: formatBenchNumber(task.throughput.mean),
      min: formatBenchNumber(task.latency.min),
      mean: formatBenchNumber(task.latency.mean),
      p75: formatBenchNumber(task.latency.p75),
      p99: formatBenchNumber(task.latency.p995),
      p999: formatBenchNumber(task.latency.p999),
      rme: `\u00B1${(task.latency.rme || 0).toFixed(2)}%`,
      samples: task.latency.samplesCount,
    }),
  ),
);

console.log(table);
