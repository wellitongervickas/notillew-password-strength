import { values, compose, join, reverse, T, cond, always, __ } from 'lodash/fp';
import { ALPHABET } from './constants';
import { compare } from './../../utils/compare';

const ALPHABET_REVERSED = compose(join(''), reverse, values)(ALPHABET);
const regex = /\D/g;

export const sequencialCharsValidator = cond<string, boolean>([
  [compare(__, ALPHABET, regex), always(true)],
  [compare(__, ALPHABET_REVERSED, regex), always(true)],
  [T, () => false]
]);

export default sequencialCharsValidator;
