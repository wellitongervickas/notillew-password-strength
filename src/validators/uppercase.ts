import { T as Else, always as returns, cond, curry } from 'ramda';

const matchValue = curry((password: string) => /[A-Z]/g.test(password));

const uppercaseValidator = cond([
  [matchValue, returns(2)],
  [Else, () => 0]
]);

export default uppercaseValidator;
