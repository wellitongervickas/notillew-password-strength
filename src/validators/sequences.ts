import { T as Else, always as returns, cond, curry } from 'lodash/fp';

const DECIMAL = '0123456789';
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const isSequencialCharacters = curry((password: string): boolean => {
  const passwordChars = password.match(/\D/g)?.join('')?.toLocaleLowerCase() || '';
  return passwordChars?.length > 0 && ALPHABET.includes(passwordChars);
});

const isSequencialCharactersReverse = curry((password: string): boolean => {
  const passwordChars = password.match(/\D/g)?.join('')?.toLocaleLowerCase() || '';
  const alphabet = Object.values(ALPHABET).reverse().join('');
  return passwordChars?.length > 0 && alphabet.includes(passwordChars);
});

const isSequencialNumbers = curry((password: string): boolean => {
  const passwordChars = password.match(/\d/g)?.join('')?.toLocaleLowerCase() || '';
  return passwordChars?.length > 0 && DECIMAL.includes(passwordChars);
});

const isSequencialNumbersReverse = curry((password: string): boolean => {
  const passwordChars = password.match(/\d/g)?.join('')?.toLocaleLowerCase() || '';
  const decimal = Object.values(DECIMAL).reverse().join('');
  return passwordChars?.length > 0 && decimal.includes(passwordChars);
});

const isRepeated = curry((password: string): boolean => {
  const firstChar = password.slice(0, 1);
  return Object.values(password).every((char) => char === firstChar);
});

const sequencesValidator = cond<string, number>([
  [isSequencialCharacters, returns(0)],
  [isSequencialCharactersReverse, returns(0)],
  [isSequencialNumbers, returns(0)],
  [isSequencialNumbersReverse, returns(0)],
  [isRepeated, returns(0)],
  [Else, () => 2]
]);

export default sequencesValidator;
