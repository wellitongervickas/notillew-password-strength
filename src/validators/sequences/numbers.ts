import { curry } from 'lodash/fp';
import { DECIMAL } from './constants';
import { matchList } from './../../utils/match';

export const isSequencialNumbers = curry((value: string): boolean => {
  const numbers = matchList(/\d/g, value).join('').toLocaleLowerCase();

  return numbers?.length > 0 && DECIMAL.includes(numbers);
});

export const isSequencialNumbersReverse = curry((value: string): boolean => {
  const numbers = matchList(/\d/g, value).join('').toLocaleLowerCase();
  const decimal = Object.values(DECIMAL).reverse().join('');

  return numbers?.length > 0 && decimal.includes(numbers);
});
