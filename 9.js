const prompt = require('prompt-sync')({ sigint: true });
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));
let num3 = parseInt(prompt("Enter the third integer:"));
let largest = Math.max(num1, num2, num3);
let smallest = Math.min(num1, num2, num3);
console.log(`The largest number is ${largest} and the smallest number is ${smallest}.`);
