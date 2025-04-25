// function to convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Driver code
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
