import uppercaseValidator from './uppercase';

describe('Uppercase validator', () => {
  it('should be 0', () => expect(uppercaseValidator('abcdef')).toBe(0));
  it('should be 2', () => expect(uppercaseValidator('ABCDEF')).toBe(2));
});
