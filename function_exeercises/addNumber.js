const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const completionCallback = sum => console.log(`Total Sum: ${sum}`);

const addNumbers = (sum = 0, numsLeft = 3, completionCallback) => {
  if (numsLeft > 0) {
    reader.question("give me your number baby: ", answer => {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
};

addNumbers(0, 3, completionCallback);
