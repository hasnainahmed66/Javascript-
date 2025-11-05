let multiArray = [[], [], []];


let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
for (let i = 0; i <= matrix; i++) {
  document.write(i + "<br>");
}


for (let i = 0; i < 10; i++){
    console.log(i);
    
}

let number = +prompt("Enter a number to show its multiplication table:");
let length = +prompt("Enter the length of the multiplication table:");

 
document.write("<h3>Multiplication Table of " + number + "</h3>"); 
for (let i = 1; i <= length; i++) { 
document.write(number + " x " + i + " = " + (number * i) + "<br>"); 

}

  // Step 1: Initialize an array with color names
    let colors = ["Red", "Green", "Blue"];
    document.write("<b>Initial colors:</b> " + colors + "<br><br>");

    // a) Ask user to add a color to the beginning
    let colorAtStart = prompt("Enter a color to add at the beginning:");
    colors.unshift(colorAtStart);
    document.write("<b>After adding color to beginning:</b> " + colors + "<br><br>");

    // b) Ask user to add a color to the end
    let colorAtEnd = prompt("Enter a color to add at the end:");
    colors.push(colorAtEnd);
    document.write("<b>After adding color to end:</b> " + colors + "<br><br>");

    // c) Add two more colors to the beginning
    colors.unshift("Orange", "Pink");
    document.write("<b>After adding two more colors to beginning:</b> " + colors + "<br><br>");

    // d) Delete the first color in the array
    colors.shift();
    document.write("<b>After deleting the first color:</b> " + colors + "<br><br>");

    // e) Delete the last color in the array
    colors.pop();
    document.write("<b>After deleting the last color:</b> " + colors + "<br><br>");

    // f) Ask user at which index he/she wants to add a color
    let index = +prompt("At which index do you want to add a color?");
    let colorName = prompt("Enter the color name to add:");
    colors.splice(index, 0, colorName);
    document.write("<b>After adding color at index " + index + ":</b> " + colors + "<br><br>");
  