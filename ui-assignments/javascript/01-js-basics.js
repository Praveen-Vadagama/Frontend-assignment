// 1. Single line comment: Basic JavaScript demonstration

/*
   1. Multi-line comment:
   This file covers arrays, descending sort, for-in loops,
   object property access, hoisting, and strict mode.
*/

// ==========================================
// 2. Fruits array sorted in descending order
// ==========================================
const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("sortBtn").addEventListener("click", function() {
    // Sort descending using standard array sort and reverse / comparator
    const sortedFruits = [...fruits].sort((a, b) => b.localeCompare(a));
    document.getElementById("sortOutput").innerText = sortedFruits.join(", ");
});

// ==========================================
// 3. Program with FOR/IN loop
// ==========================================
document.getElementById("runForInBtn").addEventListener("click", function() {
    const car = { make: "Toyota", model: "Corolla", year: 2022, color: "Silver" };
    let output = "Iterating through car properties using FOR/IN:\n";
    
    for (let key in car) {
        output += `${key}: ${car[key]}\n`;
    }
    
    document.getElementById("forInOutput").innerText = output;
});

// ==========================================
// 4. "person" object with 2 access methods
// ==========================================
const person = {
    firstname: "Vadagama",
    lastname: "Praveen"
};

document.getElementById("personBtn").addEventListener("click", function() {
    // Method 1: Dot notation
    const method1 = person.firstname;

    // Method 2: Bracket notation
    const method2 = person["lastname"];

    document.getElementById("personOutput").innerHTML = 
        `Method 1 (Dot notation): <b>${method1}</b><br>` +
        `Method 2 (Bracket notation): <b>${method2}</b>`;
});

// ==========================================
// 5. Variable Hoisting (Initialization before declaration)
// ==========================================
document.getElementById("hoistBtn").addEventListener("click", function() {
    // Hoisting demonstration with var:
    hoistedVar = "I was initialized before my var declaration!";
    var hoistedVar; // Declaration hoisted to the top

    document.getElementById("consoleOutput").innerText = 
        `Hoisted variable value: "${hoistedVar}" (Declared after assignment with var)`;
});

// ==========================================
// 6. Strict Mode demonstration
// ==========================================
document.getElementById("strictBtn").addEventListener("click", function() {
    try {
        // Enforce strict mode inside this execution scope
        (function() {
            "use strict";
            // Undeclared variable assignment causes ReferenceError in strict mode
            undeclaredVariable = "This throws an error";
        })();
    } catch (err) {
        document.getElementById("consoleOutput").innerText = 
            `Strict Mode Error Caught successfully:\n${err.name}: ${err.message}\n` +
            `Explanation: In strict mode, assigning to an undeclared variable prevents accidental global variable pollution.`;
    }
});
