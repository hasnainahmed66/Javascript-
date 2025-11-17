// 20 to 30 questions and answers

// Question 1

const firstName = prompt("Please enter your first name:");
const lastName = prompt("Please enter your last name:");
const fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome to the program.");
console.log("Full Name:", fullName);

// Question 2

const phoneModel = prompt("What is your favorite mobile phone model?");

const inputLength = phoneModel.length;
alert("The length of your input (" + phoneModel + ") is: " + inputLength);
console.log("Mobile Phone Model:", phoneModel);
console.log("Length of Input:", inputLength);

// Question 3

const word3 = "Pakistani";
const indexN = word3.indexOf("n");

alert("String: " + word3 + "\nIndex of 'n': " + indexN);

document.write("<h3>String: " + word3 + "</h3>");
document.write("<p>Index of 'n': **" + indexN + "**</p>");
console.log("Index of 'n' in 'Pakistani':", indexN);

// Question 4
const word4 = "Hello World";
const lastIndexL = word4.lastIndexOf("l");
alert("String: " + word4 + "\nLast index of 'l': " + lastIndexL);

document.write("<h3>String: " + word4 + "</h3>");
document.write("<p>Last index of 'l': **" + lastIndexL + "**</p>");
console.log("Last index of 'l' in 'Hello World':", lastIndexL);

// Question 5

const word5 = "Pakistani";
const charAt3 = word5.charAt(3);
alert("String: " + word5 + "\nCharacter at index 3: " + charAt3);
document.write("<h3>String: " + word5 + "</h3>");
document.write("<p>Character at index 3: **" + charAt3 + "**</p>");
console.log("Character at index 3 in 'Pakistani':", charAt3);
// Question 6

const firstName6 = prompt("Enter your first name:");
const lastName6 = prompt("Enter your last name:");
const fullName6 = firstName6.concat(" ", lastName6);
alert("Hello " + fullName6 + "!");
console.log("Full Name using concat():", fullName6);
// Question 7

const city7 = "Hyderabad";
const replacedCity7 = city7.replace("Hyder", "Islam");
alert("City: " + city7 + "\nAfter replacement: " + replacedCity7);
document.write("<h3>City: " + city7 + "</h3>");
document.write("<p>After replacement: **" + replacedCity7 + "**</p>");
console.log("Replaced City:", replacedCity7);
// Question 8
const message8 = "Ali and Sami are best friends. They play cricket and football together.";
const replacedMessage8 = message8.replace(/and/g, "&");
alert("Original Message: " + message8 + "\nAfter replacement: " + replacedMessage8);
document.write("<h3>Original Message: " + message8 + "</h3>");
document.write("<p>After replacement: **" + replacedMessage8 + "**</p>");
console.log("Replaced Message:", replacedMessage8);
// Question 9

const string9 = "472";
const number9 = Number(string9);
alert("Value: " + string9 + "\nType: " + typeof string9 + "\n\nValue: " + number9 + "\nType: " + typeof number9);
console.log("String Value:", string9, "Type:", typeof string9);
console.log("Number Value:", number9, "Type:", typeof number9);
// Question 10
const userInput10 = prompt("Enter some text:");
const upperCaseInput10 = userInput10.toUpperCase();
alert("User Input: " + userInput10 + "\nUpper Case: " + upperCaseInput10);
console.log("User Input:", userInput10);
console.log("Upper Case:", upperCaseInput10);
// Question 11  
const userInput11 = prompt("Enter some text:");
const titleCaseInput11 = userInput11.charAt(0).toUpperCase() + userInput11.slice(1).toLowerCase();
alert("User Input: " + userInput11 + "\nTitle Case: " + titleCaseInput11);
console.log("User Input:", userInput11);
console.log("Title Case:", titleCaseInput11);
// Question 12
const num12 = 35.36;
const numStr12 = num12.toString().replace(".", "");
alert("Number: " + num12 + "\nResult: " + numStr12);
console.log("Number:", num12);
console.log("Result after removing decimal point:", numStr12);
// Question 13
const username13 = prompt("Enter a username:");
const invalidChars13 = ["@", ".", ",", "!"];
let isValid13 = true;
for (let char of invalidChars13) {
    if (username13.includes(char)) {
        isValid13 = false;
        break;
    }
}
if (isValid13) {
    alert("Username is valid.");
} else {
    alert("Please enter a valid username without special characters (@, ., ,, !).");
}
console.log("Username Validation:", isValid13 ? "Valid" : "Invalid");
// Question 14
const A14 = ["cake", "apple pie", "cookie", "chips", "patties"];
const userSearch14 = prompt("Welcome to ABC Bakery. What do you want to order?");
const lowerCaseSearch14 = userSearch14.toLowerCase();
let found14 = false;
for (let i = 0; i < A14.length; i++) {
    if (A14[i] === lowerCaseSearch14) {
        alert(userSearch14 + " is available at index " + i + " in our bakery.");
        found14 = true;
        break;
    } 
}
if (!found14) {
    alert("We are sorry. " + userSearch14 + " is not available in our bakery.");
}
console.log("Search Result for '" + userSearch14 + "':", found14 ? "Found" : "Not Found");
// Question 15
const password15 = prompt("Enter a password:");
const passwordPattern15 = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
if (passwordPattern15.test(password15)) {
    alert("Password is valid.");
} else {
    alert("Invalid password. It must be at least 6 characters long, contain both letters and numbers, and not start with a number.");
}
console.log("Password Validation:", passwordPattern15.test(password15) ? "Valid" : "Invalid");

