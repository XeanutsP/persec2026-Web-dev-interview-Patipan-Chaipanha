import { autocomplete } from '../src/q3-autocomplete';

describe('autocomplete', () => {
  test('PDF example: limit 2', () => {
    expect(
      autocomplete('th', ['Mother', 'Think', 'Worthy', 'Apple', 'Android'], 2)
    ).toEqual(['Think', 'Mother']);
  });

  test('returns all 3 matches when maxResult >= 3', () => {
    expect(
      autocomplete('th', ['Mother', 'Think', 'Worthy', 'Apple', 'Android'], 10)
    ).toEqual(['Think', 'Mother', 'Worthy']);
  });

  test('case-insensitive match', () => {
    expect(autocomplete('TH', ['mother', 'THINK', 'worthy'], 10)).toEqual([
      'THINK',
      'mother',
      'worthy',
    ]);
  });

  test('no matches returns empty array', () => {
    expect(autocomplete('xyz', ['Apple', 'Banana'], 5)).toEqual([]);
  });

  test('maxResult 0 returns empty array', () => {
    expect(autocomplete('a', ['Apple', 'Avocado'], 0)).toEqual([]);
  });

  test('search at end of word is grouped last', () => {
    // "Arena" starts with "ar", "Guitar" ends with "ar", "Marvel" has "ar" in middle
    const result = autocomplete('ar', ['Guitar', 'Marvel', 'Arena'], 10);
    expect(result[0]).toBe('Arena');
    expect(result).toContain('Marvel');
    expect(result).toContain('Guitar');
    expect(result.indexOf('Marvel')).toBeLessThan(result.indexOf('Guitar'));
  });
});
