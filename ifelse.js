
// Problem 1: Write a JavaScript program that takes a single character (letter or number) as input and determines whether it is an uppercase letter, a lowercase letter, a number, or neither using if-else statements.

let ch = prompt("Enter a single character (letter or number):");

if (!ch || ch.length === 0) {
  alert("No input given");
} else {
  ch = ch.charAt(0);
  let code = ch.charCodeAt(0);

  if (code >= 48 && code <= 57) {            
    alert(ch + " is a Number");
  } else if (code >= 65 && code <= 90) {     
    alert(ch + " is an Uppercase letter");
  } else if (code >= 97 && code <= 122) {    
    alert(ch + " is a Lowercase letter");
  } else {
    alert(ch + " is neither letter nor number");
  }
}


// Problem 2: Write a JavaScript program that takes two integers as input and determines which one is larger, or if they are equal, using if-else statements.

let a = Number(prompt("Enter first integer:"));
let b = Number(prompt("Enter second integer:"));

if (Number.isNaN(a) || Number.isNaN(b)) {
  alert("Please enter valid numbers");
} else {
  if (a > b) {
    alert(a + " is larger than " + b);
  } else if (a < b) {
    alert(b + " is larger than " + a);
  } else {
    alert("Both integers are equal: " + a);
  }
}

// Problem 3: Write a JavaScript program that takes a number as input and determines whether it is positive, negative, or zero using if-else statements.

let num = Number(prompt("Enter a number:"));

if (Number.isNaN(num)) {
  alert("Please enter a valid number");
} else {
  if (num > 0) {
    alert("The number is positive");
  } else if (num < 0) {
    alert("The number is negative");
  } else {
    alert("The number is zero");
  }
}


// Problem 4: Write a JavaScript program that takes a single character as input and determines whether it is a vowel or a consonant using if-else statements.

let ah = prompt("Enter a single character:");

// normalize and check
if (!ch || ah.length === 0) {
  alert("No input");
} else {
  ah = ah.charAt(0).toLowerCase();
  let isVowel = (ah === 'a' || ah === 'e' || ah === 'i' || ah === 'o' || ah === 'u');
  alert(isVowel); 
}


// Problem 5: Write a JavaScript program that prompts the user to enter a password. The program should check if the entered password matches a predefined password and display appropriate messages using if-else statements.


const correctPassword = "MySecure123"; 


let entered = prompt("Enter your password:");

if (entered === null || entered === "") {
  alert("Please enter your password");
} else if (entered === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}


