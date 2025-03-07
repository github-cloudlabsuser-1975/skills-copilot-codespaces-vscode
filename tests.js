class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            return "Error! Division by zero.";
        }
        return x / y;
    }

    percentage(x, y) {
        if (y === 0) {
            return "Error! Division by zero.";
        }
        return (x / y) * 100;
    }
}

const calculator = new Calculator();

function main() {
    const prompt = require('prompt-sync')();

    console.log("Select operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Percentage");

    const choice = prompt("Enter choice (1/2/3/4/5): ");

    if (['1', '2', '3', '4', '5'].includes(choice)) {
        const num1 = parseFloat(prompt("Enter first number: "));
        const num2 = parseFloat(prompt("Enter second number: "));

        let result;
        switch (choice) {
            case '1':
                result = calculator.add(num1, num2);
                console.log(`${num1} + ${num2} = ${result}`);
                break;
            case '2':
                result = calculator.subtract(num1, num2);
                console.log(`${num1} - ${num2} = ${result}`);
                break;
            case '3':
                result = calculator.multiply(num1, num2);
                console.log(`${num1} * ${num2} = ${result}`);
                break;
            case '4':
                result = calculator.divide(num1, num2);
                console.log(`${num1} / ${num2} = ${result}`);
                break;
            case '5':
                result = calculator.percentage(num1, num2);
                console.log(`${num1} is ${result}% of ${num2}`);
                break;
        }
    } else {
        console.log("Invalid input");
    }
}

main();