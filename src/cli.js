import readlineSync from 'readline-sync';

export const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!'); 
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}; 
