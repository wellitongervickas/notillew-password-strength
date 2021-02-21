import {
  T as Else,
  __ as bypassArgs,
  gte as greaterThanOrEqual,
  compose as When,
  always as returns,
  prop as getProp,
  cond
} from 'lodash/fp';

const lengthValidator = cond<string, number>([
  [When(greaterThanOrEqual(bypassArgs, 18), getProp('length')), returns(2)],
  [When(greaterThanOrEqual(bypassArgs, 14), getProp('length')), returns(1)],
  [Else, () => 0]
]);

export default lengthValidator;
