import readlineSync from 'readline-sync';

const getRandomNum = () => Math.floor(Math.random() * 100) + 1;
const isNumEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const evenGame = () => {
	console.log('Welcome to the Brain Games!'); 
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let round = 0;
  while (round < 3) {
		let number = getRandomNum();
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `)
    if (answer === isNumEven(number)) {
			console.log('Correct!');
			round += 1;
		} else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isNumEven(number)}'\nLet's try again, ${userName}!`)
			round = 0;
		}
  }
	console.log(`Congratulations, ${userName}!`);
};