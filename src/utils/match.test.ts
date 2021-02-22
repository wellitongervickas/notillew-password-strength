import { match, getMatched } from './match';

describe('Utils match', () => {
  describe('match', () => {
    it('should be true when match a value in string', () => {
      expect(match(/\W/g, '@#$%')).toBeTruthy();
    });

    it('should be false when unmatch a value in string', () => {
      expect(match(/\W/g, 'gervickas')).toBeFalsy();
    });
  });

  describe('getMatched', () => {
    it('should return an array of matched values', () => {
      expect(getMatched(/\D/g, 'abc')).toEqual(['a', 'b', 'c']);
    });

    it('should return a empty array when no match found', () => {
      expect(getMatched(/\D/g, '1234')).toEqual([]);
    });
  });
});
