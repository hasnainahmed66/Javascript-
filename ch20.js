let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]); 
}

document.write("<h3>a. Counting:</h3>");

for (let i = 1; i <= 15; i++) {
    // Print the number followed by a comma and space (unless it's the last number).
    document.write(i);
    if (i < 15) {
        document.write(", ");
    }
}
document.write("<br>");

document.write("<h3>b. Reverse counting:</h3>");

for (let i = 10; i >= 1; i--) {
    // Print the number followed by a comma and space (unless it's the last number).
    document.write(i);
    if (i > 1) {
        document.write(", ");
    }
}
document.write("<br>");

document.write("<h3>c. Even:</h3>");

for (let i = 0; i <= 20; i += 2) {
    // Print the number.
    document.write(i);
    if (i < 20) {
        document.write(", ");
    }
}
document.write("<br>");


document.write("<h3>d. Odd:</h3>");

for (let i = 1; i <= 19; i += 2) {
    // Print the number.
    document.write(i);
    if (i < 19) {
        document.write(", ");
    }
}
document.write("<br>");