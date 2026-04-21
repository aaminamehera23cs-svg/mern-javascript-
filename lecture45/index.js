{
    // Variable hoisting (only for var, not let/const)
    console.log(age); // undefined
    var age = 21;

    // Function hoisting (works)
    sayMyName("Aamina");
    function sayMyName(finalName) {
        console.log(finalName);
    }

    // Function expression hoisting does NOT work → move call after definition
    let sayHello = function () {
        console.log("hello");
    };
    sayHello();

    // Class hoisting does NOT work → define first, then use
    class Human {}
    const object1 = new Human();

    // Functions as first-class citizens
    function greetMe(greet, fullName) {
        console.log("hello", fullName);
        greet();
    }

    function greet() {
        console.log("greetings for the day");
    }

    greetMe(greet, "Aamina");

    // Function returning function
    function solve(number) {
        return function (number) {
            return number * number;
        };
    }

    let ans1 = solve(5);
    let finalAns = ans1(10);
    console.log(finalAns);

    // Functions inside data structures (fixed commas)
    const arr = [
        function (a, b) {
            return a + b;
        },
        function (a, b) {
            return a - b;
        },
        function (a, b) {
            return a * b;
        }
    ];

    let first = arr[2];
    let ans2 = first(5, 10);
    console.log(ans2);

    // Functions as object properties (fixed arrow syntax)
    let obj = {
        age: 25,
        wt: 36,
        ht: 180,
        greet: () => {
            console.log("greetings");
        }
    };

    console.log(obj.age);
    obj.greet();
}