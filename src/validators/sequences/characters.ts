import { curry, compose, join, toLower, values, reverse } from 'lodash/fp';
import { ALPHABET } from './constants';
import { matchList } from './../../utils/match';

export const isSequencialCharacters = curry((value: string): boolean => {
  const words = compose(toLower, join(''), matchList(/\D/g))(value);
  return words?.length > 0 && ALPHABET.includes(words);
});

export const isSequencialCharactersReverse = curry((value: string): boolean => {
  const words = compose(toLower, join(''), matchList(/\D/g))(value);
  const alphabet = compose(join(''), reverse, values)(ALPHABET);

  return words?.length > 0 && alphabet.includes(words);
});
