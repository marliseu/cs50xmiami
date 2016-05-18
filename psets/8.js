/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word) {
  // write your solution here...
  var len = word.length;
  if (len < 3) {
    return word;
  }
  else {
    var index = word.search("ing");
    if (index > 0) {
      return word + "ly";
    }
    else {
      return word + word[len-1] + "ing";
    }
  }
}

var prompt = require('prompt');

  prompt.start();

  prompt.get(['word'], function (err, result) {
    // Code here
    var word = result.word;
    console.log(verbing(word));
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
