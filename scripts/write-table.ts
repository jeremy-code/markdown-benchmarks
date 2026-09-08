import { tablemark } from "tablemark";
import {
  Bench,
  type ConsoleTableConverter,
  formatNumber,
  mToNs,
  type Task,
} from "tinybench";

//github.com/vitest-dev/vitest/blob/d9ea973140d267ca4702deb32aa35c0afb960e52/packages/vitest/src/node/reporters/renderers/benchmark-table.ts#L17
function formatBenchNumber(number: number): string {
  const res = String(number.toFixed(number < 100 ? 4 : 2)).split(".");
  return (
    res[0]!.replace(/(?=(?:\d{3})+$)\B/g, ",") + (res[1] ? `.${res[1]}` : "")
  );
}

const vitestTable = tablemark(
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

console.log(vitestTable);

// https://github.com/tinylibs/tinybench/blob/147c2ac3ae7b30aa1c4a9223068b62d806d14353/src/utils.ts#L738
const tinyBenchTable = tablemark(
  // https://github.com/vitest-dev/vitest/blob/d9ea973140d267ca4702deb32aa35c0afb960e52/packages/vitest/src/node/reporters/renderers/benchmark-table.ts
  (
    await import("../test-output.json", { with: { type: "json" } })
  ).default.testResults[0]!.assertionResults[0]!.benchmarks[0]!.tasks.map(
    (task) => ({
      "Task name": task.name,
      "Latency avg (ns)": `${formatNumber(mToNs(task.latency.mean))} \xb1 ${formatNumber(task.latency.rme)}%`,
      "Latency med (ns)": `${formatNumber(mToNs(task.latency.p50))} \xb1 ${formatNumber(mToNs(task.latency.mad))}`,
      "Throughput avg (ops/s)": `${Math.round(task.throughput.mean).toString()} \xb1 ${formatNumber(task.throughput.rme)}%`,
      "Throughput med (ops/s)": `${Math.round(task.throughput.p50).toString()} \xb1 ${Math.round(task.throughput.mad).toString()}`,
      Samples: task.latency.samplesCount,
    }),
  ),
);

console.log(tinyBenchTable);
