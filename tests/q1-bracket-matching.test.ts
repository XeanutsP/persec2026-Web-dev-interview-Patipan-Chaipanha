import { isBalanced } from '../src/q1-bracket-matching';

describe('isBalanced', () => {
  // Examples straight from the PDF
  test.each([
    ['()', true],
    ['([]]', false],
    ['([{}])', true],
    ['([[{}]]]', false],
    [')', false],
    ['(]}])', false],
    ['([)]', false],
    ['{', false],
    // Extra edge cases
    ['', true],
    ['{}[]', true],
    ['{[()]}', true],
    ['((())', false],
  ])('isBalanced(%j) => %p', (input, expected) => {
    expect(isBalanced(input)).toBe(expected);
  });
});
