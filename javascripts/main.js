"use strict";

console.log("in main.js");

const Calculator = require('./Calculator');
console.log(Calculator);


let myTotal = Calculator.add(1,3); // myTotal is 4

console.log(myTotal);