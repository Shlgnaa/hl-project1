import mainLogic from '../index.js';
import getRandomNum from '../tools.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const round = () => {
    const getRandomOperator = () => {
      const operators = ['+', '-', '*'];
      const operatorIndex = getRandomNum(operators.length);
      return operators[operatorIndex];
    };

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
      default:
        return null;
    }
    return [question, answer.toString()];
  };
  mainLogic(rules, round);
};
