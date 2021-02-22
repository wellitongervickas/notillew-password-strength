import sequencialCharsValidator from './characters';

describe('Sequences characters', () => {
  describe('isSequencialCharacters', () => {
    it('should return true on sequencial characters', () => {
      expect(sequencialCharsValidator('abcdef')).toBeTruthy();
      expect(sequencialCharsValidator('a1b2c3d4e5f6')).toBeTruthy();

      expect(sequencialCharsValidator('fedcba')).toBeTruthy();
      expect(sequencialCharsValidator('6f5e4d3c2b1a')).toBeTruthy();
    });
  });
});
