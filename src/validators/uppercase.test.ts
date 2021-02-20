import uppercaseValidator from './uppercase';

describe('Uppercase Validator', () => {
  it('should be weak', () => expect(uppercaseValidator('abcdef')).toBe(0));
  it('should be strong', () => expect(uppercaseValidator('ABCDEF')).toBe(2));
});
