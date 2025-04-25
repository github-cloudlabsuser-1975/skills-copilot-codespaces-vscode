// Calculator class to handle operations
class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide two numbers
    divide(a, b) {
        if (b === 0) {
            return "Error! Division by zero.";
        }
        return a / b;
    }
}

// Function to display the calculator menu and handle user input
function calculatorMenu() {
    const calculator = new Calculator();
    let running = true;

    console.log("Welcome to the Calculator!");

    while (running) {
        console.log("\nSelect an operation:");
        console.log("1. Add");
        console.log("2. Subtract");
        console.log("3. Multiply");
        console.log("4. Divide");
        console.log("5. Exit");

        const choice = parseInt(prompt("Enter