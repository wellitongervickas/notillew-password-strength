import { always, cond, T } from 'lodash/fp';
import { match } from '../utils';

const uppercaseValidator = cond<string, number>([
  [match(/[A-Z]/g), always(2)],
  [T, () => 0]
]);

export default uppercaseValidator;
