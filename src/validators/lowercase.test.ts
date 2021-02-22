import lowercaseValidator from './lowercase';

describe('Lowercase validator', () => {
  it('should be 0', () => expect(lowercaseValidator('123ABCDEF')).toBe(0));
  it('should be 2', () => expect(lowercaseValidator('abcdef')).toBe(2));
});
