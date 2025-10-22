// alert("hasnain")


// syntax
// single line comment


// let number = 23; // this is a variable declaration and initialization
// let number2 = 20; // another variable declaration and initialization


// if (number != number2) {
//     console.log("The numbers are equal.");
// }



// compersion operators
// == equal to Donu value ko check karta hai
// === equal value and equal type unki dono ko check karta hai or unki dono same honi chahiye
// != not equal 
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// logical operators
// && and hona chahiye dono condition me
// || or agr ek condition bhi true ho to chalega 
// ! not 




12 === "12" // false
12 == "12" // true
12 !== "12" // true
12 != "12" // false
12 > 10 // true garter than
10 < 5 // false less than 
15 >= 15 // true level han ya barabar
5 <= 3 // false less than or equal to


// var gender = "Female";
// if (gender == "male") {
//     console.log("Gender is male");
// }else{
//     console.log("apke lia naya campus banaya ja rha hai");
// }


// let kialana = prompt("Enter your gender (male/female):");
// if (kialana === "dahi") {
//     console.log("Welcome to the male campus.");
// } else {
//     console.log("Welcome to the female campus.");
// }




// var correctAnswer = "One";
// var userAnswer = prompt("One");

// let score = 0;

// if (userAnswer === correctAnswer) {
//     score++;
// }
// console.log("Correct! Your score is: " + score);



// if(false) console.log("my name is nain");
// else console.log("my name is hasnain");


// let fullName = "Hasnain Ahmed";

// if (fullName !== "Hasnain Ahmed"+ "" + "samoo") {
//     console.log(fullName);
// }else{
//     console.log("name not found");
// }


// let lotteryNumber = "347437";
// if(lotteryNumber !== 347437) {
//     console.log("Congratulations! You have won the lottery.");
// } else {
//     console.log("Sorry, better luck next time.");
// }




// let age = 18;
// if (age >= 20) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }



// let className = "Eigth";
// if (className !== "Eigth") { // yh nh hoga 
//     console.log("You are Elegible.");
// } else {
//     console.log("Not Elegible.");
// }



// let redSignal = "";
// let yellowSignal = "";
// let greenSignal = "";

// if (redSignal == "red") {
//     console.log("Ruk jaoo.");
// } else if (yellowSignal == "yellow") {
//     console.log("Ready ho jaoo.");
// } else if (greenSignal == "green") {
//     console.log("Chaloo.");
// } else {
//     console.log("Signal not recognized.");
// }



// let language = prompt("Enter the programming language:","javascript");
// let expirence = prompt("Enter your years of experience: ","2");


// if(language == "javascript") {
//     let locat = prompt("Enter your location:","pakistan");

// }


// if(language == "javascript" && locat == "pakistan" && expirence >= 2) {
//     console.log("You are eligible for the job.");
// } 
// else {
//     console.log("You are not eligible for the job.");
// }



// let hour = 10;

// if (hour < 1) {
//   console.log("Good morning");
// } else {
//   console.log("Good afternoon");
// }
// Execution: hour < 12 ? true -> "Good morning"

// if (2 < 5) { // se chhota hai
//   console.log("2 chhota hai 5 se");
// }

// let marks = prompt("Enter your marks: ");

// if (marks >= 90) { // se bada ya barabar
//   console.log("A+");
// } else if (marks >= 75) {
//   console.log("A");
// } else if (marks >= 60) {
//   console.log("B");
// } else if (marks >= 50) {
//   console.log("Fail");
// }


    // even odd program

// let number = prompt("Enter a number:");

// if (number % 2 === 0) {
//   console.log("The number is Even");
// } else {
//   console.log("The number is Odd");
// }



let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = num1 + num2;
} 
else if (operation === "-") {
  result = num1 - num2;
} 
else if (operation === "*") {
  result = num1 * num2;
} 
else if (operation === "/") {
  result = num1 / num2;
} 
else if (operation === "%") {
  result = num1 % num2;
} 
else {
  result = "Invalid operation!";
}

console.log("Result: " + result);
alert("Result: " + result);
