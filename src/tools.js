import { question } from "readline-sync";

export const getRandomNum = (max = 50, min = 0) => Math.floor(Math.random() * (max - min)) + min;
export const isNumEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
export const getRandomOperator = () => {
    const operators = ['+','-','*'];
    const operatorIndex = Math.floor(Math.random()*3);
    return operators[operatorIndex];
};
