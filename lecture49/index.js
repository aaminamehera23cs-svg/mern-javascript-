
// Objects with Dynamic Nature


let obj = {
    age: 21,
    wt: 62,
    ht: 152
};

console.log("Original object:", obj);

// Dynamically adding a new property
obj.color = "white";
console.log("After adding 'color':", obj);



// Spread Cloning (Shallow Copy)


let dest = { ...obj };  // creates a shallow copy

// Modifying original object
obj.age = 22;
obj.wt = 54;
obj.ht = 154;

console.log("\nAfter modifying original object:");
console.log("Original object:", obj);
console.log("Cloned object (spread):", dest);  
// dest remains unchanged (only top-level copy)



// Cloning using Object.assign()


let dest1 = Object.assign({}, obj);  // another shallow copy method

console.log("\nUsing Object.assign():");
console.log("Original object:", obj);
console.log("Cloned object (assign):", dest1);



// Cloning through Iteration


let a = {
    age: 17,
    wt: 65,
    ht: 160
};

let b = {};  // empty object to store clone

// Copying properties manually
for (let key in a) {
    let newKey = key;        // current property name
    let newValue = a[key];   // value of that property

    b[newKey] = newValue;    // assigning to new object
}

console.log("\nCloning via iteration:");
console.log("Original object:", a);
console.log("Cloned object (loop):", b);