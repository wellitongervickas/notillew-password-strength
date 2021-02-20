import { T as Else, always as returns, cond, curry } from 'lodash/fp';

const matchValue = curry((password: string): boolean => /[a-z]/g.test(password));
const lowercaseValidator = cond<string, number>([
  [matchValue, returns(2)],
  [Else, () => 0]
]);

export default lowercaseValidator;
