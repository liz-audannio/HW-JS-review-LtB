var emptyObject = {};
var personObject = {
    firstName: "John",
    lastName: "Smith"
}


var personObject = {
    firstName: "John",
    lastName: "Smith"
}
personObject.age = 23;
personObject["salary"] = 14000;


for (var member in personObject) {
    if (personObject.hasOwnProperty(member)) {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}
//the member firstName of personObject is John
//the member lastName of personObject is Smith
//the member age of personObject is 23
//the member salary of personObject is 14000



//Exercise
//You must define an object called person with the following members:
//    The member firstName of the person is "Jack"
//    The member lastName of the person is "Smith"
//    The member age of the person is 19
//    The member employed of the person is true

// TODO: change this code
var person = {
    firstName: "Jack",
    lastName: "Smith",
    age: 19,
    employed: true
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);