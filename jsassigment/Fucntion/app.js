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

//Question 8
function power(a, b) {
    if (b === 0) {
        return 1;
    }
    
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 3));

//Question 9
function calculateAreaOfCircle(radius) {
  return Math.PI * radius * radius;
}
console.log(calculateAreaOfCircle(5));
//Question 10
function checkPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(checkPalindrome("A man, a plan, a canal: Panama"));

//Question 11 
function convertToTitleCase(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}
console.log(convertToTitleCase("hello world from javascript"));
//Question 12
function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//Question 13
function countOccurrences(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) {
      count++;
    }
  }
  return count;
} 
console.log(countOccurrences("hello world", "o"));
