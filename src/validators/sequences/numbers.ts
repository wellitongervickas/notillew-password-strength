import { values, compose, join, reverse, T, cond, always, __ } from 'lodash/fp';
import { DECIMAL } from './constants';
import { compare } from './../../utils/compare';

const DECIMAL_REVERSED = compose(join(''), reverse, values)(DECIMAL);
const regex = /\d/g;

export const sequencialNumbersValidator = cond([
  [compare(__, DECIMAL, regex), always(true)],
  [compare(__, DECIMAL_REVERSED, regex), always(true)],
  [T, () => false]
]);

export default sequencialNumbersValidator;
