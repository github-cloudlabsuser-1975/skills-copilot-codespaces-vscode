// function to covert Celsius
// to Fahrenheit
function cToF(celsius) {
  return (celsius * 9/5) + 32;
}

// Driver code
const celsius = 60;
console.log(celsius + "C is " + cToF(celsius) + "F");
cToF(celsius);

// function to convert Fahrenheit to Celsius
function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Driver code
const fahrenheit = 100;
console.log(fahrenheit + "F is " + fToC(fahrenheit) + "C");