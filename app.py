def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

def percentage(a, b):
    return (a / b) * 100

def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user is prompted to select an operation from the following options:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage

    The function then asks the user to input two numbers and performs the selected operation.

    Functions used:
    - add(num1, num2): Adds two numbers.
    - subtract(num1, num2): Subtracts the second number from the first.
    - multiply(num1, num2): Multiplies two numbers.
    - divide(num1, num2): Divides the first number by the second.
    - percentage(num1, num2): Calculates the percentage of the first number relative to the second.

    Input:
    - choice (str): The operation to perform (1/2/3/4/5).
    - num1 (float): The first number.
    - num2 (float): The second number.

    Output:
    - Prints the result of the selected operation or an error message for invalid input.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")
        elif choice == '5':
            print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid input. Please select a valid operation.")

if __name__ == "__main__":
    calculator()