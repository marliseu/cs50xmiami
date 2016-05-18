/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...
  var ia = a[0];
  var ib = b[0];
  var newa = [];
  var newb = [];
  for (var i = 0, len = a.length; i < len; i++) {
    if (i == 0) {
      newa.push(ib);
    }
    else {
      newa.push(a[i]);
    }
  }
  for (var i = 0, len = b.length; i < len; i++) {
    if (i == 0) {
      newb.push(ia);
    }
    else {
      newb.push(b[i]);
    }
  }
  var string = newa.join("") + " " + newb.join("");
  return string;
}

var prompt = require('prompt');

  prompt.start();

  prompt.get(['word1', 'word2'], function (err, result) {
    var word1 = result.word1;
    var word2 = result.word2;
    console.log(mixUp(word1, word2));
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
