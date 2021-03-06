/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var prompt = require('prompt');

  prompt.start();

  prompt.get(['celsius', 'farenheit'], function (err, result) {
    var celsius = result.celsius;
    //Multiply by 9, then divide by 5, then add 32
    var farenheit = ((celsius * 9) / 5) + 32;
    console.log(celsius + " ºC is " + farenheit + "ºF");

    farenheit = result.farenheit;
    //Deduct 32, then multiply by 5, then divide by 9
    celsius = ((farenheit - 32) * 5) / 9;
    console.log(farenheit + " ºF is " + celsius + "ºC");
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
