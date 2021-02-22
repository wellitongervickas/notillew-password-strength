import { T, always, cond } from 'lodash/fp';
import { match } from '../utils';

const lowercaseValidator = cond<string, number>([
  [match(/[a-z]/g), always(2)],
  [T, () => 0]
]);

export default lowercaseValidator;
