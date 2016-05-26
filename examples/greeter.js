function greeter(salutation) {
  var counter = 0;
  var prefix = ". " + salutation + ' ';
  return function(name) {
    counter ++;
    return counter + prefix + name + '!';
  }
}

var greet = greeter('Hello');
// greet('World') ==> '1. Hello World!'
// greet('World') ==> '2. Hello World!'
