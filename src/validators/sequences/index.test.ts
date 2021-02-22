import sequencesValidator from './';

describe('Sequences Validator', () => {
  it('should be weak', () => {
    expect(sequencesValidator('fedcba')).toBe(0);
    expect(sequencesValidator('abcdef')).toBe(0);
    expect(sequencesValidator('123456')).toBe(0);
    expect(sequencesValidator('654321')).toBe(0);
    expect(sequencesValidator('000000000000000000')).toBe(0);
  });

  it('should be strong', () => {
    expect(sequencesValidator('loijnfsatqew')).toBe(2);
    expect(sequencesValidator('925d12d068a861')).toBe(2);
    expect(sequencesValidator('78123yhd7@&DH@+15')).toBe(2);
  });
});
