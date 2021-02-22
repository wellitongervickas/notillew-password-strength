import { curry } from 'lodash/fp';

export const match = curry((regex: RegExp, value: string): boolean => regex.test(value));

export const matchList = curry((regex: RegExp, value: string) => value.match(regex) || []);

export default match;
