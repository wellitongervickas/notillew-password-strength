import lengthValidator from './length';

describe('Length Validator', () => {
  it('should be weak', () => expect(lengthValidator('123456789012')).toBe('weak'));
  it('should be medium', () => expect(lengthValidator('12345678901234')).toBe('medium'));
  it('should be strong', () => expect(lengthValidator('123456789012345678')).toBe('strong'));
});
