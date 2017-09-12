(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');


const Calculator = {
	add, subtract, multiply, divide
};

module.exports = Calculator;
},{"./add":2,"./divide":3,"./multiply":5,"./subtract":6}],2:[function(require,module,exports){
"use strict";

const addEm = (num1, num2) => {
	return num1 + num2;
};

module.exports = addEm;
},{}],3:[function(require,module,exports){
"use strict";

const divideEm = (num1, num2) => {
	return num1 / num2;
};

module.exports = divideEm;
},{}],4:[function(require,module,exports){
"use strict";

console.log("in main.js");

const Calculator = require('./Calculator');
console.log(Calculator);


let myTotal = Calculator.add(1,3); // myTotal is 4

console.log(myTotal);
},{"./Calculator":1}],5:[function(require,module,exports){
"use strict";

const multiplyEm = (num1, num2) => {
	return num1 * num2;
};

module.exports = multiplyEm;
},{}],6:[function(require,module,exports){
"use strict";

const subtractEm = (num1, num2) => {
	return num1 - num2;
};

module.exports = subtractEm;
},{}]},{},[4]);
