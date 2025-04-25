const { Calculator } = require('./test.js');

// test.test.js

describe('Calculator Menu', () => {
    let calculator;
    let promptMock;
    let consoleLogMock;

    beforeEach(() => {
        calculator = new Calculator();
        promptMock = jest.spyOn(global, 'prompt').mockImplementation();
        consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('should add two numbers', () => {
        promptMock
            .mockReturnValueOnce('1') // Select Add
            .mockReturnValueOnce('5') // First number
            .mockReturnValueOnce('3') // Second number
            .mockReturnValueOnce('5'); // Exit

        calculatorMenu();

        expect(consoleLogMock).toHaveBeenCalledWith('Welcome to the Calculator!');
        expect(consoleLogMock).toHaveBeenCalledWith('Result: 8');
    });

    test('should subtract two numbers', () => {
        promptMock
            .mockReturnValueOnce('2') // Select Subtract
            .mockReturnValueOnce('10') // First number
            .mockReturnValueOnce('4') // Second number
            .mockReturnValueOnce('5'); // Exit

        calculatorMenu();

        expect(consoleLogMock).toHaveBeenCalledWith('Result: 6');
    });

    test('should multiply two numbers', () => {
        promptMock
            .mockReturnValueOnce('3') // Select Multiply
            .mockReturnValueOnce('6') // First number
            .mockReturnValueOnce('7') // Second number
            .mockReturnValueOnce('5'); // Exit

        calculatorMenu();

        expect(consoleLogMock).toHaveBeenCalledWith('Result: 42');
    });

    test('should divide two numbers', () => {
        promptMock
            .mockReturnValueOnce('4') // Select Divide
            .mockReturnValueOnce('8') // First number
            .mockReturnValueOnce('2') // Second number
            .mockReturnValueOnce('5'); // Exit

        calculatorMenu();

        expect(consoleLogMock).toHaveBeenCalledWith('Result: 4');
    });

    test('should handle division by zero', () => {
        promptMock
            .mockReturnValueOnce('4') // Select Divide
            .mockReturnValueOnce('8') // First number
            .mockReturnValueOnce('0') // Second number
            .mockReturnValueOnce('5'); // Exit

        calculatorMenu();

        expect(consoleLogMock).toHaveBeenCalledWith('Error! Division by zero.');
    });

    test('should exit the menu', () => {
        promptMock.mockReturnValueOnce('5'); // Exit

        calculatorMenu();

        expect(consoleLogMock).toHaveBeenCalledWith('Goodbye!');
    });
});