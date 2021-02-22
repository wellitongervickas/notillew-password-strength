import { gte, compose, __, cond, T, always } from 'lodash/fp';
import * as validators from './validators';
import { getScore } from './utils';

const passwordStrength = cond<string, string>([
  [compose(gte(__, 8), getScore(validators)), always('strong')],
  [compose(gte(__, 4), getScore(validators)), always('medium')],
  [T, () => 'weak']
]);

export default passwordStrength;
