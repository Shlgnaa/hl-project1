import readlineSync from 'readline-sync';

//
export const mainLogic = (gameRules, makeRounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameRules}`);

  let score = 0;
  while (score < 3) {
    let match = makeRounds();
    let quiz = match[0];
    let answer = match[1];
    const playersAnswer = readlineSync.question(
      `Question: ${quiz}\nYour answer: `
    );
    if (playersAnswer === answer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(
        `'${playersAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${userName}!`
      );
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
