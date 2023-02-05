import mainLogic from '../index.js';
import getRandomNum from '../tools.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = () => {
    const number = getRandomNum();
    const isNumEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

    const question = number;
    const answer = isNumEven(number);

    return [question, answer];
  };
  mainLogic(rules, round);
};
