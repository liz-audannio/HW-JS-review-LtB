function greet(name) {
    return "Hello " + name + "!";
}

console.log(greet("Eric")); // prints out Hello Eric!


var greet = function(name) {
    return "Hello " + name + "!";
}

console.log(greet("Eric")); // prints out Hello Eric!


//Exercise
// Define a function called multiplyFive which accepts a number
// and returns a number that number multiplied by 5.

var multiplyFive = function(number) {
    return number * 5;
}
console.log(multiplyFive(3));
console.log(multiplyFive(4));
console.log(multiplyFive(5));
console.log(multiplyFive(6));