var i;
for (i = 0; i < 3; i = i + 1) {
    console.log(i);
}

for (var i = 0; i < 3; i++) {
    console.log(i);
}

var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++) {
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

//The member of myArray in index 0 is A
//The member of myArray in index 1 is B
//The member of myArray in index 2 is C

var i = 99;
while (i > 0) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}

var i = 99;
while (true) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 0) {
        break;
    }
}

for (var i = 0; i < 100; i++) {
    // check that the number is even
    if (i % 2 == 0) {
        continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}




//Exercise
//In this exercise, you must write a for loop that iterates on the myArray variable
// and prints out all of its members.



var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

//TODO: modify this code
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}