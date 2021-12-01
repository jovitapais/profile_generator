const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! I... ", (answer) => {
              answers.push(answer);

              console.log(` \n ${answers[0]} likes to ${answers[1]} while listening to ${answers[2]} and also like to eat ${answers[4]}, for ${answers[3]}, plays ${answers[5]}, and can ${answers[6]}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});