import mainLogic from '../index.js';
import getRandomNum from '../tools.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const round = () => {
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const getGCD = (a, b) => {
      if (b === 0) {
        return a;
      }
      return getGCD(b, a % b);
    };

    const question = `${num1} ${num2}`;
    const answer = getGCD(num1, num2);

    return [question, answer.toString()];
  };
  mainLogic(rules, round);
};
