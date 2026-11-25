import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
// The river stays cold in memory even years after the last swim.
const text = "We bathed in the river with my cousins, the water cold enough to make us gasp, and our wet shirts dried on warm stones while we shivered and refused to go home.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log("wrote entry.txt from " + repoDir);
