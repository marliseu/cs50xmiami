/*
The Calculator

- Write a function called squareNumber that will take one argument (a number),
  square that number, and return the result.
  It should also log a string like "The result of squaring the number 3 is 9."

- Write a function called halfNumber that will take one argument (a number),
  divide it by 2, and return the result.
  It should also log a string like "Half of 5 is 2.5.".

- Write a function called percentOf that will take two numbers,
  figure out what percent the first number represents of the second number,
  and return the result. It should also log a string like "2 is 50% of 4."

- Write a function called areaOfCircle that will take one argument (the radius),
  calculate the area based on that, and return the result.
  It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  - Bonus: Round the result so there are only two digits after the decimal.

Write a function that will take one argument (a number) and perform the following operations,
  using the functions you wrote earlier:
  - Take half of the number and store the result.
  - Square the result of #1 and store that result.
  - Calculate the area of a circle with the result of #2 as the radius.
  - Calculate what percentage that area is of the squared result (#3).
*/


// write your solution here...
function squareNumber(n) {
  var squared = n * n;
  console.log("The result of squaring the number " + n + " is " + squared);
  return squared;
}

function halfNumber(n) {
  var half = n / 2;
  console.log("Half of " + n + " is " + half);
  return half;
}

function percentOf(x, y) {
  var percent = (x / y) * 100;
  console.log(x + " is " + percent + "% of " + y);
  return percent;
}

function areaOfCircle(r) {
  var pi = 3.141592;
  var area = pi * (Math.pow(r, 2));
  area = Math.round(area * 100) / 100;
  console.log("The area for a circle with radius of " + r + " is " + area);
  return area;
}

// TODO
function messyCalc(num) {
  // Take half of the number and store the result.
  var num1 = num / 2;
  // Square the result of #1 and store that result.
  var num2 = num1 * num1;
  // Calculate the area of a circle with the result of #2 as the radius.
  var num3 = Math.pi * (Math.pow(num2, 2));
  // Calculate what percentage that area is of the squared result (#3).
  
}
