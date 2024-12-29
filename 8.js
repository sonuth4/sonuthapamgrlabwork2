const prompt = require('prompt-sync')({ sigint: true });
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
if (num1 > num2) {
    console.log(`The larger number is ${num1} and the smaller number is ${num2}.`);
} else if (num2 > num1) {
    console.log(`The larger number is ${num2} and the smaller number is ${num1}.`);
} else {
    console.log("Both numbers are equal.");
}
