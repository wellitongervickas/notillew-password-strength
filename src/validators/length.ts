import { T, always, compose, __, cond, gte, curry } from 'ramda';

const getLength = curry((password: String): Number => password.length);

const lengthValidator = cond([
  [compose(gte(__, 17), getLength), always('strong')],
  [compose(gte(__, 13), getLength), always('medium')],
  [T, () => 'weak']
]);

export default lengthValidator;
