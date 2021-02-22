import { T, always, cond } from 'lodash/fp';

import sequencialCharsValidator from './characters';
import sequencialNumbersValidator from './numbers';
import { isRepeated } from './values';

const sequencesValidator = cond<string, number>([
  [sequencialCharsValidator, always(0)],
  [sequencialNumbersValidator, always(0)],
  [isRepeated, always(0)],
  [T, () => 2]
]);

export default sequencesValidator;
