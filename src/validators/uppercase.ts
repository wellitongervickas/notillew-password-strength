import { curry, always as returns, cond, T as Else } from 'lodash/fp';

const matchValue = curry((password: string): boolean => /[A-Z]/g.test(password));
const uppercaseValidator = cond<string, number>([
  [matchValue, returns(2)],
  [Else, () => 0]
]);

export default uppercaseValidator;
