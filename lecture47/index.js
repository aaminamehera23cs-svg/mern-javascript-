// default parameters 
function sayName(fname, lname = "Meher") {
    console.log("name:", fname, lname);
}
sayName("Aamina");

function sayName2(fname, lname = fname.toUpperCase()) {
    console.log("name:", fname, lname);
}
sayName2("Aamina");

// default parameters using objects
function solve(value = { age: 21, wt: 54, ht: 152 }) {
    console.log("parameters:", value);
}
solve();

class Human {
    // properties
    age;
    #wt = 80;
    ht = 180;

    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }

    // methods
    walking() {
        console.log("walking", this.#wt);
    }

    running() {
        console.log("running");
    }

    // getter
    get fetchWeight() {
        return this.#wt;
    }

    // setter
    set modifyWeight(val) {
        this.#wt = val;
    }
}

let obj = new Human(21, 152, 50);

// correct access
console.log(obj.fetchWeight); // getter
console.log(obj.age);         
// console.log(obj.#wt); ❌ not allowed
console.log(obj.ht);          // correct property name

obj.walking();