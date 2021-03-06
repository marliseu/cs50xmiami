/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var prompt = require('prompt');

  prompt.start();

  prompt.get(['radius'], function (err, result) {
    var radius = result.radius;
    var pi = 3.141592;

    var circumference = 2 * pi * radius;
    console.log("The circumference is " + circumference);

    var area = pi * (Math.pow(radius, 2));
    console.log("The area is " + area);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }
