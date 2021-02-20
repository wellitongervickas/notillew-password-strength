import lowercaseValidator from './lowercase';

describe('Lowercase Validator', () => {
  it('should be weak', () => expect(lowercaseValidator('123ABCDEF')).toBe(0));
  it('should be strong', () => expect(lowercaseValidator('abcdef')).toBe(2));
});
