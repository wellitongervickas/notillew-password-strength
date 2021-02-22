import specialCharsValidator from './specialChars';

describe('SpecialChars validator', () => {
  it('should be 0', () => expect(specialCharsValidator('A88BSflLS218ydha')).toBe(0));
  it('should be 2', () => expect(specialCharsValidator('A8@8B+Sfl!LS#218ydha')).toBe(2));
});
