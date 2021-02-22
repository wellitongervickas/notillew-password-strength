import { curry, toLower, compose, join, gt, prop, includes } from 'lodash/fp';
import { getMatched } from './match';

export const compare = curry((value: string, comparator: string, regex: RegExp): boolean => {
  const chars = compose(toLower, join(''), getMatched(regex))(value);
  return gt(prop('length', chars), 0) && includes(chars, comparator);
});

export default compare;
