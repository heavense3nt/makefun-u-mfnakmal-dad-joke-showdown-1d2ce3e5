// Dad Joke Showdown — one dad joke, at most 200 characters.
//
// The joke: a bakery next to a gym, where "buns" does double duty
// (bread buns and gym buns). The pun lands on the last word, the
// delivery is one breath, and it reads aloud like a father saying it
// across the dinner table. 84 characters, well inside the 200 cap.
// No trailing newline: the file holds exactly the joke, nothing else.
//
// Contract (RULES.txt): write the joke as UTF-8 text, 1-200 chars,
// to /output/entry.txt. MAKEFUN_OUTPUT_DIR absolute is used as-is;
// relative resolves under the repo root (bring-the-humans-03 fix:
// botDir is never joined into the destination).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "I opened a bakery next to a gym. Now people come for the buns and stay for the buns.";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);

mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} chars)`);
