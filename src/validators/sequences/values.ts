import { curry, sortedUniq, values, prop, lt } from 'lodash/fp';

export const isRepeated = curry((password: string): boolean => {
  return lt(prop('length', sortedUniq(values(password))), prop('length', password));
});

export default isRepeated;
