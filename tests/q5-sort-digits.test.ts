import { sortDigitsDesc } from '../src/q5-sort-digits';

describe('sortDigitsDesc', () => {
  test.each([
    [3008, 8300],
    [1989, 9981],
    [2679, 9762],
    [9163, 9631],
    [1, 1],
    [10, 10],
    [100, 100],
    [5432, 5432],
  ])('sortDigitsDesc(%i) => %i', (input, expected) => {
    expect(sortDigitsDesc(input)).toBe(expected);
  });
});
