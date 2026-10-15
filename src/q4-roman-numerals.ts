/**
 * Q4: Modern Roman Numerals — bidirectional conversion.
 *
 * Supported symbols:
 *   I=1, V=5, X=10, L=50, C=100, D=500, M=1000
 * Subtractive notation applies (IV=4, IX=9, XL=40, XC=90, CD=400, CM=900).
 *
 * Examples:
 *   toRoman(1989) => "MCMLXXXIX"
 *   toRoman(2000) => "MM"
 *   toRoman(68)   => "LXVIII"
 *   toRoman(109)  => "CIX"
 *
 *   fromRoman("MCMLXXXIX") => 1989
 */

const ROMAN_TABLE: [number, string][] = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

/** Convert a positive integer to its Roman numeral string. */
export function toRoman(n: number): string {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new RangeError('Input must be a positive integer');
  }
  let result = '';
  let remaining = n;
  for (const [value, numeral] of ROMAN_TABLE) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }
  return result;
}

/** Convert a Roman numeral string to an integer. */
export function fromRoman(roman: string): number {
  const symbolValues: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  const upper = roman.toUpperCase();
  for (let i = 0; i < upper.length; i++) {
    const current = symbolValues[upper[i]];
    const next = symbolValues[upper[i + 1]];
    if (current === undefined) {
      throw new Error(`Invalid Roman numeral character: ${upper[i]}`);
    }
    // Subtractive rule: if current value is less than the next, subtract it
    if (next !== undefined && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}
