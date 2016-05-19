/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(children, partner, geo, job) {
  console.log("You will be a " + job + " in " + geo + ", and married to " + partner + " with " + children + " kids.")
}

// console.log(tellFortune(0, 'no one', 'the world', 'person'));
// console.log(tellFortune(2, 'a hipster', 'Oregon', 'barista'));
// console.log(tellFortune(4, 'a rich dude', 'New York', 'trophy wife'));

var prompt = require('prompt');

  prompt.start();

  prompt.get(['number', 'person', 'place', 'job'], function (err, result) {
    // Code here
    console.log(tellFortune(result.number, result.person, result.place, result.job));
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
