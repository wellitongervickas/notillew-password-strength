import { curry, values, compose, join, reverse, T, cond, always } from 'lodash/fp';
import { DECIMAL } from './constants';
import { compare } from './../../utils/compare';

const decimalReversed = compose(join(''), reverse, values)(DECIMAL);

export const isSequencialNumbers = curry((comparator: string, value: string): boolean =>
  compare(value, comparator, /\d/g)
);

export const sequencialNumbersValidator = cond([
  [isSequencialNumbers(DECIMAL), always(true)],
  [isSequencialNumbers(decimalReversed), always(true)],
  [T, () => false]
]);

export default sequencialNumbersValidator;
