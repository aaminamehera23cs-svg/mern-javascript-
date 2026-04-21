// GLOBAL SCOPE
const age = 15;
console.log(age);

{
    console.log(age);
}

if (true) {
    console.log(age);
}

for (let i = 0; i < 2; i++) {
    console.log(age);
}

function sayHelloGlobal() {
    console.log("different", age);
}
sayHelloGlobal();


// FUNCTION SCOPE
function sayHelloFunction() {
    var fullname = "earth";
    console.log("hello", fullname);
}
sayHelloFunction();

// console.log(fullname); // not accessible outside function


// BLOCK SCOPE (let & const)
{
    let ageBlock = 100;
    console.log(ageBlock);
}
// console.log(ageBlock); // not accessible outside block


// TEMPORAL DEAD ZONE
console.log("temporal dead zone starts here");

// console.log(marks); // would cause ReferenceError

const marks = 100;

console.log("temporal dead zone ends here");
console.log(marks);