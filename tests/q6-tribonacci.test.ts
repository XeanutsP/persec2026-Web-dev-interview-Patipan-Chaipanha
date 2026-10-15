import { tribonacci } from '../src/q6-tribonacci';

describe('tribonacci', () => {
  // Examples from PDF
  test('f([1, 3, 5], 5) => [1, 3, 5, 9, 17]', () => {
    expect(tribonacci([1, 3, 5], 5)).toEqual([1, 3, 5, 9, 17]);
  });

  test('f([2, 2, 2], 3) => [2, 2, 2]', () => {
    expect(tribonacci([2, 2, 2], 3)).toEqual([2, 2, 2]);
  });

  test('f([10, 10, 10], 4) => [10, 10, 10, 30]', () => {
    expect(tribonacci([10, 10, 10], 4)).toEqual([10, 10, 10, 30]);
  });

  // Classic tribonacci: [1,1,1,3,5,9,...]
  test('f([1, 1, 1], 6) => [1, 1, 1, 3, 5, 9]', () => {
    expect(tribonacci([1, 1, 1], 6)).toEqual([1, 1, 1, 3, 5, 9]);
  });

  // Edge cases for seed sizes
  test('empty seed, n=0 returns []', () => {
    expect(tribonacci([], 0)).toEqual([]);
  });

  test('empty seed, n=6 extends from [0,0,0]', () => {
    expect(tribonacci([], 6)).toEqual([0, 0, 0, 0, 0, 0]);
  });

  test('single-element seed [5], n=5', () => {
    expect(tribonacci([5], 5)).toEqual([5, 0, 0, 5, 5]);
  });

  test('two-element seed [3, 4], n=5', () => {
    expect(tribonacci([3, 4], 5)).toEqual([3, 4, 0, 7, 11]);
  });

  test('n smaller than seed length returns trimmed result', () => {
    expect(tribonacci([1, 3, 5], 2)).toEqual([1, 3]);
  });
});
