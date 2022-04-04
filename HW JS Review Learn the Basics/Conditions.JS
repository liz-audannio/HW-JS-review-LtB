if (confirm("Are you John Smith?")) {
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}

console.log("1" == 1); // true
console.log("1" === 1); // false

var myNumber = 42;
if (myNumber == 42) {
    console.log("The number is correct.");
}

var foo = 1;
var bar = 2;

if (foo < bar) {
    console.log("foo is smaller than bar.");
}

var foo = 1;
var bar = 2;
var moo = 3;

if (foo < bar && moo > bar) {
    console.log("foo is smaller than bar AND moo is larger than bar.");
}

if (foo < bar || moo > bar) {
    console.log("foo is smaller than bar OR moo is larger than bar.");
}

var notTrue = false;
if (!notTrue) {
    console.log("not not true is true!");
}



var rank = "Commander";
switch (rank) {
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}


//Exercise
//In this exercise, you must construct an if inside the checkNumber function statement
//that checks if the number myNumber is equal to 42. If that is the case, the function
//must print out using console.log the word correct. If myNumber is not equal to 42, the
//function must print out using console.log the word incorrect. You can name the argument 
//passed to a function by supplying the name inside the parentheses. For example, 
//function myFunction(myArgument).

function checkNumber(myNumber) {
    // TODO: write your code here
    if (myNumber === 42) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);