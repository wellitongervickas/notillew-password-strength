import { values, compose, join, reverse, T, cond, always, __ } from 'lodash/fp';
import { ALPHABET } from './constants';
import { compare } from './../../utils/compare';

const regex = /\D/g;

export const sequencialCharsValidator = cond([
  [compare(__, ALPHABET, regex), always(true)],
  [compare(__, compose(join(''), reverse, values)(ALPHABET), regex), always(true)],
  [T, () => false]
]);

export default sequencialCharsValidator;
