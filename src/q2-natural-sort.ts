/**
 * Q2: Sort an array of alphanumeric strings using natural sort order.
 *
 * From the examples:
 *   ["TH19", "SG20", "TH2"] => ["SG20", "TH2", "TH19"]
 *   ["TH10", "TH3Netflix", "TH1", "TH7"] => ["TH1", "TH3Netflix", "TH7", "TH10"]
 *
 * Natural sort: compare letter prefix alphabetically first,
 * then compare embedded numbers numerically, then remaining text.
 */
export function naturalSort(items: string[]): string[] {
  // Tokenise each string into alternating [text, number, text, number …] chunks
  const tokenise = (s: string): Array<string | number> =>
    s
      .split(/(\d+)/)
      .map((part) => (part === '' ? null : isNaN(Number(part)) ? part : Number(part)))
      .filter((x): x is string | number => x !== null);

  return [...items].sort((a, b) => {
    const tokA = tokenise(a);
    const tokB = tokenise(b);
    const len = Math.max(tokA.length, tokB.length);

    for (let i = 0; i < len; i++) {
      const ta = tokA[i];
      const tb = tokB[i];

      // If one side has run out of tokens it comes first
      if (ta === undefined) return -1;
      if (tb === undefined) return 1;

      if (typeof ta === 'number' && typeof tb === 'number') {
        if (ta !== tb) return ta - tb;
      } else if (typeof ta === 'string' && typeof tb === 'string') {
        const cmp = ta.localeCompare(tb);
        if (cmp !== 0) return cmp;
      } else {
        // Different types: strings before numbers
        return typeof ta === 'string' ? -1 : 1;
      }
    }
    return 0;
  });
}
