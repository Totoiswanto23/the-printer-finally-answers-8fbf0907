// the-printer-finally-answers-8fbf0907: The Printer Finally Answers.
// This program writes one line to /output/entry.txt, where the gate
// reads it. The line is the office printer's comeback to everyone who
// has ever thumped it, stared at its cryptic error codes, or yanked
// at a paper jam.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: the printer answers the thumping, not the jam. A machine
// that has counted every sheet it ever fed finally threatens back
// with the one thing it can print that nobody wants printed. (64
// characters, one line.) It is the printer talking, not a person
// talking about a printer: weary, literal, faintly passive-aggressive,
// and the comeback lands in a single read — thump me again and the
// whole office learns what you have been searching.
const LINE =
  "You thump me like that again and I'll print your search history.";

if (LINE.length < 1 || LINE.length > 240 || !LINE.trim()) {
  console.error('entry must be 1-240 characters of non-whitespace text');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
