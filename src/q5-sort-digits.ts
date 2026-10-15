/**
 * Q5: Sort the digits of a positive integer in descending order and return the result as an integer.
 *
 * Examples:
 *   sortDigitsDesc(3008) => 8300
 *   sortDigitsDesc(1989) => 9981
 *   sortDigitsDesc(2679) => 9762
 *   sortDigitsDesc(9163) => 9631
 */
export function sortDigitsDesc(n: number): number {
  const sorted = String(n)
    .split('')
    .sort((a, b) => Number(b) - Number(a))
    .join('');
  return Number(sorted);
}
