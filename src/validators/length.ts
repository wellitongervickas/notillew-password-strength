import {
  T as Else,
  gte as greaterThanOrEqual,
  compose as If,
  always as Returns,
  __ as bypassArg,
  cond,
  curry
} from 'ramda';

const getLength = curry((password: String): Number => password.length);

const lengthValidator = cond([
  [If(greaterThanOrEqual(bypassArg, 17), getLength), Returns('strong')],
  [If(greaterThanOrEqual(bypassArg, 13), getLength), Returns('medium')],
  [Else, () => 'weak']
]);

export default lengthValidator;
