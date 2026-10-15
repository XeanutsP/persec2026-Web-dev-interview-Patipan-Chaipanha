/**
 * Q6: Tribonacci sequence
 *
 * Like Fibonacci but each term is the sum of the three preceding terms.
 * The function receives an initial "seed" array (0–3 elements) and a total
 * count `n` (which includes the seed values). Returns the sequence of length `n`.
 *
 * Rules for seeds with fewer than 3 elements:
 *   - []        → treated as [0, 0, 0] (standard tribonacci start)
 *   - [a]       → treated as [a, 0, 0]
 *   - [a, b]    → treated as [a, b, 0]
 *   - [a, b, c] → used as-is
 *
 * Examples:
 *   tribonacci([1, 3, 5], 5)   => [1, 3, 5, 9, 17]
 *   tribonacci([2, 2, 2], 3)   => [2, 2, 2]
 *   tribonacci([10, 10, 10], 4) => [10, 10, 10, 30]
 *   tribonacci([1, 1, 1], 6)   => [1, 1, 1, 3, 5, 9]
 *   tribonacci([2, 3, 1], 6)   => [2, 3, 1, 6, 10, 17]  (extending the example pattern)
 */
export function tribonacci(seed: number[], n: number): number[] {
  if (n <= 0) return [];

  // Pad seed to length 3 with zeros
  const padded: [number, number, number] = [
    seed[0] ?? 0,
    seed[1] ?? 0,
    seed[2] ?? 0,
  ];

  const result: number[] = [...padded];

  while (result.length < n) {
    const len = result.length;
    result.push(result[len - 1] + result[len - 2] + result[len - 3]);
  }

  return result.slice(0, n);
}
