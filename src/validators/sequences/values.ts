import { curry, sortedUniq, values, prop, lt, compose } from 'lodash/fp';

const uniqValues = compose(sortedUniq, values);

export const isRepeated = curry((password: string): boolean => {
  return lt(prop('length', uniqValues(password)), prop('length', password));
});

export default isRepeated;
