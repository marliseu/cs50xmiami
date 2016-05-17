/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var prompt = require('prompt');

  prompt.start();

  prompt.get(['yourAge', 'maxAge', 'eatenPerDay'], function (err, result) {
    var currentAge = result.yourAge;
    var maxAge = result.maxAge;
    var perDay = result.eatenPerDay;
    var lifetime = (maxAge - currentAge) * 365 * perDay;

    console.log("You will need " + lifetime + " to last you until the ripe old age of " + maxAge);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
