import { T, always, cond } from 'lodash/fp';
import { isRepeated } from './values';
import { isSequencialCharacters, isSequencialCharactersReverse } from './characters';
import { isSequencialNumbers, isSequencialNumbersReverse } from './numbers';

const sequencesValidator = cond<string, number>([
  [isSequencialCharacters, always(0)],
  [isSequencialCharactersReverse, always(0)],
  [isSequencialNumbers, always(0)],
  [isSequencialNumbersReverse, always(0)],
  [isRepeated, always(0)],
  [T, () => 2]
]);

export default sequencesValidator;
