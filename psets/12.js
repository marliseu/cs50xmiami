/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...
function calculateSupply(age, perDay) {
  var maxAge = 89;
  var lifetime = (maxAge - age) * 365 * perDay;

  console.log("You will need " + lifetime + " to last you until the ripe old age of " + maxAge);
}

// calculateSupply(19, 3);
// calculateSupply(40, 1);
// calculateSupply(22, 2);

var prompt = require('prompt');

  prompt.start();

  prompt.get(['yourAge', 'eatenPerDay'], function (err, result) {
    // Code here
    var currentAge = result.yourAge;
    var perDay = result.eatenPerDay;

    calculateSupply(currentAge, perDay);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
