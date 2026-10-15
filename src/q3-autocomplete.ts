/**
 * Q3: Autocomplete
 *
 * Searches `items` for strings that contain `search` (case-insensitive),
 * then orders results:
 *   1. Strings that START with `search`
 *   2. Strings that contain `search` in the MIDDLE
 *   3. Strings that END with `search`
 *
 * Returns at most `maxResult` items.
 *
 * Example:
 *   autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)
 *   => ["Think", "Mother"]
 */
export function autocomplete(
  search: string,
  items: string[],
  maxResult: number
): string[] {
  const lower = search.toLowerCase();

  const starts: string[] = [];
  const middle: string[] = [];
  const ends: string[] = [];

  for (const item of items) {
    const lItem = item.toLowerCase();
    const idx = lItem.indexOf(lower);
    if (idx === -1) continue;

    if (idx === 0) {
      starts.push(item);
    } else if (idx + lower.length === lItem.length) {
      ends.push(item);
    } else {
      middle.push(item);
    }
  }

  return [...starts, ...middle, ...ends].slice(0, maxResult);
}
