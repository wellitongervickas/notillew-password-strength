import specialCharsValidator from './specialChars';

describe('SpecialChars Validator', () => {
  it('should be weak', () => expect(specialCharsValidator('A88BSflLS218ydha')).toBe(0));
  it('should be strong', () => expect(specialCharsValidator('A8@8B+Sfl!LS#218ydha')).toBe(2));
});
