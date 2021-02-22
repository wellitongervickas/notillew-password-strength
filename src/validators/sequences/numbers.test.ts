import { isSequencialNumbers, isSequencialNumbersReverse } from './numbers';

describe('Sequences numbers', () => {
  describe('isSequencialNumbers', () => {
    it('should return true on sequencial characters', () => {
      expect(isSequencialNumbers('123456')).toBeTruthy();
      expect(isSequencialNumbers('1a2b3c4d5e6f')).toBeTruthy();
    });
  });

  describe('isSequencialNumbersReverse', () => {
    it('should return true on sequencial reversed characters', () => {
      expect(isSequencialNumbersReverse('f6e5d4c3b2a1')).toBeTruthy();
    });
  });
});
