let value1 = parseInt(prompt("Enter your first number"));
let value2 = parseInt(prompt("Enter your second number"));
let operator = prompt("Enter your preferred operator(+, -, *, /)");

const result = (a, b) => {
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "*") {
    return a * b;
  } else if (operator == "/") {
    return a / b;
  } else {
    return "invalid operator, Try again!!!";
  }
};

alert(`The result is: ${result(value1, value2)}`);

