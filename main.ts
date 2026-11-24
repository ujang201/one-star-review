import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Gravity has held me down my entire life and never once offered to help me carry the groceries upstairs.";

// The gate requires 1-160 characters of non-whitespace UTF-8 text, one line.
if (REVIEW.length > 160 || REVIEW.trim().length === 0 || REVIEW.includes("\n")) {
  throw new Error(`invalid review: ${REVIEW.length} chars`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
