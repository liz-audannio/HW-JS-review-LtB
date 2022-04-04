var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
1, 2, 3 // the result


console.log(myStack.pop());
console.log(myStack);
3 // the result from myStack.pop()
1, 2 // what myStack contains now

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());


var myArray = [1, 2, 3];
myArray.unshift(0);
console.log(myArray); // will print out 0,1,2,3

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 5);

console.log(splice); // will print out 3,4,5,6,7
console.log(myArray); // will print out 0,1,2,8,9

//Exercise
// In this tutorial, you must manipulate the array called myArray and do the following:
// Push the number 42 to the end of the array
// Shift a variable from the beginning of the array


var myArray = [true, "What is the meaning of life?"];
myArray.push(42);
myArray.shift();

console.log(myArray[0]);
console.log(myArray[1]);