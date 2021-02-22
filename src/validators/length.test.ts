import lengthValidator from './length';

describe('Length validator', () => {
  it('should be 0', () => expect(lengthValidator('123456789012')).toBe(0));
  it('should be 1', () => expect(lengthValidator('12345678901234')).toBe(1));
  it('should be 2', () => expect(lengthValidator('123456789012345678')).toBe(2));
});
