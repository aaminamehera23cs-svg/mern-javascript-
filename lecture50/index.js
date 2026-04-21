try{
    console.log("try block starts here");
    console.log(x);
    console.log("try block ends here");
}
catch(err){
    console.log("control is inside catch-block");
    console.log("error:",err);
}
//finally runs regardless of the occurence of an error
finally{
    console.log("finally executes regardless of error");
}
//custom errors-better understanding 
try{
    console.log(x);
}
catch{// =======================
// Error Handling in JavaScript
// =======================

// Example 1: Basic try...catch
console.log("Example 1: Basic try...catch");

try {
    let result = x + 10; // 'x' is not defined → ReferenceError
    console.log(result);
} catch (error) {
    console.log("Error caught");
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
}


// =======================
// Example 2: try...catch with finally
// =======================

console.log("\nExample 2: try...catch...finally");

try {
    console.log("Trying to execute code...");
    let num = 10;
    console.log(num.toUpperCase()); // TypeError
} catch (error) {
    console.log("Error handled:", error.message);
} finally {
    console.log("This block always runs (cleanup code)");
}


// =======================
// Example 3: Throwing Custom Errors
// =======================

console.log("\nExample 3: Custom error using throw");

try {
    let age = -5;

    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    console.log("Valid age:", age);
} catch (error) {
    console.log("Custom error:", error.message);
}


// =======================
// Example 4: Safe Division Function
// =======================

console.log("\nExample 4: Function with error handling");

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.log("Division error:", error.message);
        return null;
    } finally {
        console.log("Division attempt completed");
    }
}

console.log("Result 1:", divide(10, 2));
console.log("Result 2:", divide(10, 0));


// =======================
// Example 5: Nested try...catch
// =======================

console.log("\nExample 5: Nested try...catch");

try {
    try {
        let data = JSON.parse("invalid JSON"); // SyntaxError
    } catch (innerError) {
        console.log("Inner catch:", innerError.message);
        throw innerError; // rethrowing error
    }
} catch (outerError) {
    console.log("Outer catch:", outerError.message);
}
    throw new Error("declare variable first");
}
//throw error
let errorCode=100;
if(errorCode==100){
    throw new Error("Invalid Json");
}