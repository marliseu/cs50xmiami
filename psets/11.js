/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
function calculateAge(bir) {
  var ages = [];
  var cur = new Date().getFullYear();
  var age = cur - bir;
  ages.push(age);
  age = age - 1;
  ages.push(age);

  console.log("They are either " + ages[1] + " or " + ages[0]);
}

// calculateAge(1993, 2016);
// calculateAge(1990, 2016);
// calculateAge(1956, 2016);

var prompt = require('prompt');

  prompt.start();

  prompt.get(['birthYear'], function (err, result) {
    // Code here
    var birthYear = result.birthYear;

    calculateAge(birthYear);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
