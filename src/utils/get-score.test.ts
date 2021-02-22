import getScore from './get-score';

describe('Utils get score', () => {
  const validators = {
    min: (value: string) => (value.length >= 6 ? 1 : 0),
    match: (value: string) => value.includes('7')
  };

  it('should return zero when value length is less than 6', () => {
    expect(getScore(validators, '12345')).toBe(0);
  });

  it('should return 1 when value length is greater than 6', () => {
    expect(getScore(validators, '1234567')).toBe(2);
  });
});
