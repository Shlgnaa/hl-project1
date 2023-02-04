import { mainLogic } from '../index.js';
import { getRandomNum, getRandomOperator } from '../tools.js';

export const calcGame = () => {
  const rules = 'What is the result of the expression?';
  const round = () => {
    const operand1 = getRandomNum();
    const operand2 = getRandomNum();
    const operator = getRandomOperator();

    const question = `${operand1} ${operator} ${operand2}`;
    let answer;
    switch (operator) {
      case '+':
        answer = operand1 + operand2;
        break;
      case '-':
        answer = operand1 - operand2;
        break;
      case '*':
        answer = operand1 * operand2;
        break;
    }
    return [question, answer.toString()];
  };
  mainLogic(rules, round);
};
