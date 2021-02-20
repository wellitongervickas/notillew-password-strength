import { T as Else, always as returns, cond, curry } from 'ramda';

const matchValue = curry((password: string) => /[a-z]/g.test(password));
const lowercaseValidator = cond([
  [matchValue, returns(2)],
  [Else, () => 0]
]);

export default lowercaseValidator;
