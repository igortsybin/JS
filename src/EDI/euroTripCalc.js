const readline = require('readline');

const sumConverter = sum => sum + 1;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the numbers: ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`You spent about: ${sumConverter(answer)} rubles`);

  rl.close();
});
