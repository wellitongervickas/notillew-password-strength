import { T as Else, always as returns, cond, curry, difference } from 'lodash/fp';

const decimalNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const isSequencialCharacters = curry((password: string): boolean => {
  return false;
});

const sequencesValidator = cond<string, number>([
  [isSequencialCharacters, returns(0)],
  [Else, () => 2]
]);

export default sequencesValidator;
