import { curry, always as returns, cond, T as Else } from 'lodash/fp';

const matchValue = curry((password: string): boolean => /\W/g.test(password));
const specialCharsValidator = cond<string, number>([
  [matchValue, returns(2)],
  [Else, () => 0]
]);

export default specialCharsValidator;
