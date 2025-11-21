// question 1
function showDateTime() {
  const now = new Date();
  document.write(now);
}

showDateTime();

//Question 2
function greetUser(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return "Hello " + fullName + "!";
}

document.write(greetUser("Hasnain", "Samoo"));

//Question 3
function addNumbers() {
  const num1 = +prompt("Enter first number:");
  const num2 = +prompt("Enter second number:");
  return num1 + num2;
}

document.write("Sum = " + addNumbers());

//Question 4

function calculator(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
  else return "Invalid operator!";
}

let n1 = +prompt("Enter first number:");
let n2 = +prompt("Enter second number:");
let op = prompt("Enter operator (+, -, *, /):");

document.write("Result = " + calculator(n1, n2, op));

//Question 5
function square(num) {
  return num * num;
}

console.log(square(5));

//Question 6
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

//Question 7
function countNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
countNumbers(1, 10);
