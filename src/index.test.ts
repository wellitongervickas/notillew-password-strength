import passwordStrength from './index';

describe('Password strength', () => {
  it('should be weak', () => {
    expect(passwordStrength('123456')).toBe('weak');
  });

  it('should be medium', () => {
    expect(passwordStrength('1V6svxWai4jkf')).toBe('medium');
  });

  it('should be strong', () => {
    expect(passwordStrength('Avs9aDO@8*!&!+Idsc#')).toBe('strong');
  });
});
