const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`Please enter the time in seconds for Timer?`, inputTime => {
  
 
  console.log(`Hi ${inputTime}!`);
  readline.close();
});
const timer = function(args) {
  process.stdout.write('\x07');
}
