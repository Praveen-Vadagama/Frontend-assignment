// ==========================================
// 1. 'this' keyword to make button disappear
// ==========================================
function hideMe(element) {
    // 'element' refers to 'this' passed from the inline onclick handler
    element.style.display = "none";
}

// ==========================================
// 2. call() and apply() demonstration
// ==========================================
function introduce(greeting, punctuation) {
    return `${greeting}, I am ${this.firstName} ${this.lastName}${punctuation}`;
}

const employee1 = { firstName: "Rahul", lastName: "Sharma" };
const employee2 = { firstName: "Priya", lastName: "Verma" };

document.getElementById("callApplyBtn").addEventListener("click", function() {
    // call() passes arguments individually
    const resCall = introduce.call(employee1, "Hello", "!");

    // apply() passes arguments as an array
    const resApply = introduce.apply(employee2, ["Greetings", "."]);

    const difference = 
        `--- Results ---\n` +
        `call() result  : ${resCall}\n` +
        `apply() result : ${resApply}\n\n` +
        `--- Difference ---\n` +
        `* call() accepts additional arguments one by one: fn.call(thisArg, arg1, arg2)\n` +
        `* apply() accepts additional arguments as an array: fn.apply(thisArg, [arg1, arg2])`;

    document.getElementById("callApplyOutput").innerText = difference;
});

// ==========================================
// 3. Simple Click Counter
// ==========================================
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
    count++;
    document.getElementById("counterValue").innerText = count;
});

// ==========================================
// 4. Counter with Getter and Setter Accessors
// ==========================================
const counterObject = {
    _value: 0,
    
    // Getter accessor
    get count() {
        return this._value;
    },
    
    // Setter accessor
    set count(newValue) {
        if (typeof newValue === "number") {
            this._value = newValue;
        }
    }
};

document.getElementById("getterSetterIncBtn").addEventListener("click", function() {
    // Triggers the setter and updates display using getter
    counterObject.count = counterObject.count + 1;
    document.getElementById("getterSetterDisplay").innerText = counterObject.count;
});

document.getElementById("getterSetterGetBtn").addEventListener("click", function() {
    // Explicit read using getter
    alert(`Current getter value is: ${counterObject.count}`);
});

document.getElementById("getterSetterResetBtn").addEventListener("click", function() {
    counterObject.count = 0;
    document.getElementById("getterSetterDisplay").innerText = counterObject.count;
});

// ==========================================
// 5. Add properties/methods using object prototypes
// ==========================================
// Existing constructor function
function Student(name, batch) {
    this.name = name;
    this.batch = batch;
}

// Adding new method and property via prototype
Student.prototype.institute = "JALA Academy";
Student.prototype.getDetails = function() {
    return `Student: ${this.name} | Batch: ${this.batch} | Institute: ${this.institute}`;
};

document.getElementById("protoBtn").addEventListener("click", function() {
    const student1 = new Student("Praveen", "2026 UI Track");
    const student2 = new Student("Susmitha", "2026 UI Track");

    const result = 
        `Extended via Student.prototype:\n` +
        `1. ${student1.getDetails()}\n` +
        `2. ${student2.getDetails()}`;

    document.getElementById("protoOutput").innerText = result;
});
