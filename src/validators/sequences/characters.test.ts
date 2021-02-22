import { isSequencialCharacters, isSequencialCharactersReverse } from './characters';

describe('Sequences characters', () => {
  describe('isSequencialCharacters', () => {
    it('should return true on sequencial characters', () => {
      expect(isSequencialCharacters('abcdef')).toBeTruthy();
      expect(isSequencialCharacters('a1b2c3d4e5f6')).toBeTruthy();
    });
  });

  describe('isSequencialCharactersReverse', () => {
    it('should return true on sequencial reversed characters', () => {
      expect(isSequencialCharactersReverse('fedcba')).toBeTruthy();
      expect(isSequencialCharactersReverse('6f5e4d3c2b1a')).toBeTruthy();
    });
  });
});
