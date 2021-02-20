import {
  T as Else,
  gte as greaterThanOrEqual,
  compose as When,
  always as returns,
  __ as bypassArg,
  cond,
  prop as getProp
} from 'lodash/fp';

const lengthValidator = cond<string, number>([
  [When(greaterThanOrEqual(bypassArg, 17), getProp('length')), returns(2)],
  [When(greaterThanOrEqual(bypassArg, 13), getProp('length')), returns(1)],
  [Else, () => 0]
]);

export default lengthValidator;
