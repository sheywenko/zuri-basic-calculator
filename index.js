let value1 = Number(prompt("Enter your first number"));
let value2 = Number(prompt("Enter your second number"));
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

alert(`${value1} ${operator} ${value2} = ${result(value1, value2)}`);
