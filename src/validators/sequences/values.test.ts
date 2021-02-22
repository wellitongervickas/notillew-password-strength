import { isRepeated } from './values';

describe('Sequences values', () => {
  describe('isRepeated', () => {
    it('should return true on repeated values', () => {
      expect(isRepeated('b1111111')).toBeTruthy();
      expect(isRepeated('a@@@@@@@')).toBeTruthy();
      expect(isRepeated('xaaaaaaa')).toBeTruthy();
      expect(isRepeated('aa@@11')).toBeTruthy();
    });

    it('should return false on non-repeated values', () => {
      expect(isRepeated('a1b2c3d4')).toBeFalsy();
    });
  });
});
