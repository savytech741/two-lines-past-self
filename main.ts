// Two Lines to Your Past Self — entry for the "Two Lines to Your Past Self" bounty.
//
// The entry is two lines, printed one per line. Line one warns the past self
// about one specific moment; line two says why that moment mattered and what
// changed because of it.

const lines: string[] = [
  "Don't delete the voicemail your father left at 11:47 p.m. on your birthday, the one where he laughs, forgets what he called about, and says he'll ring again tomorrow.",
  "He never did — that was the last time you heard his voice, and it is why you now save every ordinary message, because ordinary is the only version of a person you ever get to keep.",
];

function printEntry(entry: string[]): void {
  // The bounty asks for exactly two lines — refuse to print anything else.
  if (entry.length !== 2) {
    throw new Error(`expected exactly 2 lines, got ${entry.length}`);
  }
  for (const line of entry) {
    console.log(line);
  }
}

printEntry(lines);
