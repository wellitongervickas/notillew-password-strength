import sequencialNumbersValidator from './numbers';

describe('Sequences numbers', () => {
  it('should return true on sequencial characters', () => {
    expect(sequencialNumbersValidator('123456')).toBeTruthy();
    expect(sequencialNumbersValidator('1a2b3c4d5e6f')).toBeTruthy();
    expect(sequencialNumbersValidator('f6e5d4c3b2a1')).toBeTruthy();
  });
});
