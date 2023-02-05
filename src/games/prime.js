import mainLogic from '../index.js';
import getRandomNum from '../tools.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const number = getRandomNum();
    const isPrime = (num) => {
      if (num <= 1) return 'no';
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return 'no';
      }
      return 'yes';
    };

    const question = number;
    const answer = isPrime(number);

    return [question, answer];
  };
  mainLogic(rules, round);
};
