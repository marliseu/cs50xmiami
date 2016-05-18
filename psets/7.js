/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var firstChar = s[0];
  var fixed = [];
  for (var i = 0, len = s.length; i < len; i++) {
    if (i > 0) {
      if (s[i] == firstChar) {
        fixed.push("*");
      }
      else {
        fixed.push(s[i]);
      }
    }
    else {
      fixed.push(s[i]);
    }
  }
  return fixed.join("");
}

var prompt = require('prompt');

  prompt.start();

  prompt.get(['word'], function (err, result) {
    var word = result.word;
    console.log(fixStart(word));
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
