const readline = require('readline');

/**
 * timer function definition, it works on node REPL.
 */
const timer = function () {
  //create interface for console input/output
  const rI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rI.question(`Please enter the time in seconds for the buzzer time, use space for multiple buzzer times?`, (inputTime) => {
    //split single string array from rI.history
    const splitInputTime = rI.history.map((e) => e.split(' '));
    const splitInputTimeArray = splitInputTime[0];
    //loop over the array and set element as setTimeout wait time
    splitInputTimeArray.forEach(element => {
      setTimeout(() => {
        //buzzer
        process.stdout.write('\x07');
      }, parseInt(element));
    });
    //closes interface
    rI.close();
  });
}
timer();