import mainLogic from '../index.js';
import getRandomNum from '../tools.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const round = () => {
    const makeProgression = () => {
      const length = getRandomNum(10, 5);
      const start = getRandomNum(10);
      const step = getRandomNum(10, 1);
      const result = [];
      for (let i = 0; i < length; i += 1) {
        result.push(start + step * i);
      }

      const hiddenIndex = getRandomNum(length);
      const hiddenValue = result[hiddenIndex];
      result[hiddenIndex] = '..';

      return [result, hiddenValue];
    };
    const progression = makeProgression();
    const question = progression[0];
    const answer = progression[1];

    return [question.join(' '), answer.toString()];
  };
  mainLogic(rules, round);
};
