/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
var currentYear = new Date().getFullYear();
var birthYear = prompt("What year were you born?");
var ages = [];
var age = currentYear - birthYear;
ages.push(age);
age = age - 1;
ages.push(age);

console.log("They are either " + ages[1] + " or " + ages[0]);
