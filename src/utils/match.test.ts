import { match, matchList } from './match';

describe('Utils match', () => {
  describe('match', () => {
    it('should be true when match a value in string', () => {
      expect(match(/\W/g, '@#$%')).toBeTruthy();
    });

    it('should be false when unmatch a value in string', () => {
      expect(match(/\W/g, 'gervickas')).toBeFalsy();
    });
  });

  describe('matchList', () => {
    it('should return an array of matched values', () => {
      expect(matchList(/\D/g, 'abc')).toEqual(['a', 'b', 'c']);
    });

    it('should return a empty array when no match found', () => {
      expect(matchList(/\D/g, '1234')).toEqual([]);
    });
  });
});
