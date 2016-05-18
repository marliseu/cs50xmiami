/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
  var notIndex = sentence.search("not");
  var badIndex = sentence.search("bad");

  if (badIndex > notIndex) {
    var beginning = sentence.slice(0, notIndex);
    var end = sentence.slice((badIndex + 3), sentence.length);
    var good = beginning + "good" + end;
    console.log(good);
  }
  else {
    console.log(sentence);
  }
}

var prompt = require('prompt');

  prompt.start();

  prompt.get(['sentence'], function (err, result) {
    // Code here
    var sentence = result.sentence;
    console.log(notBad(sentence));
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
