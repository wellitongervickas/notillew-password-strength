import { T, __, gte, compose, always, prop, cond } from 'lodash/fp';

const lengthValidator = cond<string, number>([
  [compose(gte(__, 18), prop('length')), always(2)],
  [compose(gte(__, 14), prop('length')), always(1)],
  [T, () => 0]
]);

export default lengthValidator;
