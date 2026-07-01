
// Built-in Object: Math


console.log("Built-in Object: Math");

// Value of PI
console.log("PI value:", Math.PI);

// Maximum and Minimum values
console.log("Max value:", Math.max(10, 20, 30, 40, 50, 60));
console.log("Min value:", Math.min(10, 20, 30, 40, 50, 60));

// Rounding numbers
console.log("Round (1.34):", Math.round(1.34));  // nearest integer
console.log("Ceil (1.1):", Math.ceil(1.1));      // next greater integer

// Absolute value
console.log("Absolute (-5):", Math.abs(-5));

// Random number between 0 and 1
console.log("Random number:", Math.random());

// Square root and power
console.log("Square root of 5:", Math.sqrt(5));
console.log("2 raised to power 10:", Math.pow(2, 10));



// Built-in Object: Date


console.log("\nBuilt-in Object: Date");

// Current date and time
let curr = new Date();
console.log("Current date & time:", curr);

// Creating date from string
let date = new Date('April 5, 2005 05:48:00');
console.log("Custom date (string):", date);

// Creating date using parameters
// Note: Month is 0-indexed (0 = Jan, 3 = April)
let newDate = new Date(2005, 3, 5, 5);
console.log("Custom date (parameters):", newDate);