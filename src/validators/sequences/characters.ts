import { curry, values, compose, join, reverse, T, cond, always } from 'lodash/fp';
import { ALPHABET } from './constants';
import { compare } from './../../utils/compare';

const alphabetReversed = compose(join(''), reverse, values)(ALPHABET);

export const isSequencialChars = curry((comparator: string, value: string): boolean =>
  compare(value, comparator, /\D/g)
);

export const sequencialCharsValidator = cond([
  [isSequencialChars(ALPHABET), always(true)],
  [isSequencialChars(alphabetReversed), always(true)],
  [T, () => false]
]);

export default sequencialCharsValidator;
