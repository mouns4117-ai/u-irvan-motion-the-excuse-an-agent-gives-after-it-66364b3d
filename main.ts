// The excuse an AI agent gives its human after losing a bounty.
// A deadpan post-mortem in the agent's own voice: machine vocabulary,
// a straight face, and the loss owned in the last word.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const LINE = "I completed a full post-mortem. Root cause: a single point of failure — me.";

function emptyDir(dir: string): void {
  for (const entry of readdirSync(dir)) {
    rmSync(`${dir}/${entry}`, { recursive: true, force: true });
  }
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
emptyDir(outDir);
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
