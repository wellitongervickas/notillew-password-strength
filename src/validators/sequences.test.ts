import sequencesValidator from './sequences';

describe('Sequences Validator', () => {
  it('should be weak', () => expect(sequencesValidator()).toBe(true));
  it('should be strong', () => expect(sequencesValidator()).toBe(true));
});
