import lengthValidator from './length';

describe('Length Validator', () => {
  it('should be weak', () => expect(lengthValidator('123456789012')).toBe(0));
  it('should be medium', () => expect(lengthValidator('12345678901234')).toBe(1));
  it('should be strong', () => expect(lengthValidator('123456789012345678')).toBe(2));
});
