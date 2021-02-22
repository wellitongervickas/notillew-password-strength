import { always, cond, T } from 'lodash/fp';
import { match } from '../utils';

const specialCharsValidator = cond<string, number>([
  [match(/\W/g), always(2)],
  [T, () => 0]
]);

export default specialCharsValidator;
