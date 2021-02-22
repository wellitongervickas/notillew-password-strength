import { compare } from './compare';

describe('Validators sequences', () => {
  it('should return true when compare a list of sequencial numbers', () => {
    const decimalComparator = '0123456789';
    expect(compare('123456', decimalComparator, /\d/g)).toBeTruthy();
  });

  it('should return true when compare a list of sequencial chars', () => {
    const comparator = 'abcdefghijklmnopq';
    expect(compare('abcdefg', comparator, /\D/g)).toBeTruthy();
  });
});
