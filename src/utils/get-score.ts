import { values, reduce, curry } from 'lodash/fp';

export const getScore = curry((validators: Object, value: string): number =>
  reduce(
    (score: number, validator: Function): number => (score += validator(value)),
    0,
    values(validators)
  )
);

export default getScore;
