/*
DrEvil!

Create a function called DrEvil.
It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.

For example:
  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

function drEvil(amount) {
  // write your solution here...
  if (amount == 1000000) {
    return amount + "(pinky)";
  }
  else if (amount == "1,000,000") {
    return amount + "(pinky)";
  }
  else {
    return amount;
  }
}

var prompt = require('prompt');

  prompt.start();

  prompt.get(['dollars'], function (err, result) {
    var dollars = result.dollars;
    console.log(drEvil(dollars));
  });
