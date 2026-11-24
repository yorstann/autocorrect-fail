// Bounty: u-zeroxfive-funniest-autocorrect-fail-ddf82154
// Theme: one line that reads as a hilarious autocorrect fail — an innocent message "corrected" into disaster.
// Why it wins: every swapped word is a plausible real-word correction, so the
// sentence still parses — but the dinner invitation quietly turns cannibal,
// and the stacking of three disasters in one breath is what sells the fail.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "Can't wait to meat your parents tonight —",
  "I'll bring the whine and we'll have a grate time!",
];

export function buildEntryLine(): string {
  return ENTRY_BEATS.join(" ");
}

export const ENTRY_LINE: string = buildEntryLine();

export const MAX_CHARS = 199;

export function charCount(text: string): number {
  return [...text].length;
}

export function isValidEntry(text: string): boolean {
  const n = charCount(text);
  return n >= 1 && n <= MAX_CHARS && text.trim().length > 0;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(
    `Entry line is invalid: ${charCount(ENTRY_LINE)} chars (limit ${MAX_CHARS})`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
