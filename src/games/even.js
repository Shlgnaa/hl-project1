import { mainLogic } from '../index.js';
import { getRandomNum, isNumEven } from '../tools.js';

export const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = () => {
    const number = getRandomNum();

    const question = number;
    const answer = isNumEven(number);

    return [question, answer];
  }
  mainLogic(rules, round);
};
