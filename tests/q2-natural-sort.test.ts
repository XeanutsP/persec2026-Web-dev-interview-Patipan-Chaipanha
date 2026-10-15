import { naturalSort } from '../src/q2-natural-sort';

describe('naturalSort', () => {
  test('example 1 from PDF', () => {
    expect(naturalSort(['TH19', 'SG20', 'TH2'])).toEqual(['SG20', 'TH2', 'TH19']);
  });

  test('example 2 from PDF', () => {
    expect(naturalSort(['TH10', 'TH3Netflix', 'TH1', 'TH7'])).toEqual([
      'TH1',
      'TH3Netflix',
      'TH7',
      'TH10',
    ]);
  });

  test('empty array', () => {
    expect(naturalSort([])).toEqual([]);
  });

  test('all same prefix, ascending numeric', () => {
    expect(naturalSort(['A10', 'A2', 'A1', 'A20'])).toEqual(['A1', 'A2', 'A10', 'A20']);
  });
});
