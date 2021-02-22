import { curry } from 'lodash/fp';

export const match = curry((regex: RegExp, value: string): boolean => regex.test(value));

export const getMatched = curry(
  (regex: RegExp, value: string): Array<any> => value.match(regex) || []
);

export default match;
