import { toRoman, fromRoman } from '../src/q4-roman-numerals';

describe('toRoman', () => {
  test.each([
    [1989, 'MCMLXXXIX'],
    [2000, 'MM'],
    [68, 'LXVIII'],
    [109, 'CIX'],
    [1, 'I'],
    [4, 'IV'],
    [9, 'IX'],
    [40, 'XL'],
    [90, 'XC'],
    [400, 'CD'],
    [900, 'CM'],
    [3999, 'MMMCMXCIX'],
  ])('toRoman(%i) => %s', (input, expected) => {
    expect(toRoman(input)).toBe(expected);
  });
});

describe('fromRoman', () => {
  test.each([
    ['MCMLXXXIX', 1989],
    ['MM', 2000],
    ['LXVIII', 68],
    ['CIX', 109],
    ['I', 1],
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
    ['MMMCMXCIX', 3999],
  ])('fromRoman(%s) => %i', (input, expected) => {
    expect(fromRoman(input)).toBe(expected);
  });
});

describe('roundtrip', () => {
  test.each([1, 4, 9, 14, 40, 99, 400, 900, 1989, 2000, 3999])(
    'toRoman then fromRoman roundtrip for %i',
    (n) => {
      expect(fromRoman(toRoman(n))).toBe(n);
    }
  );
});
