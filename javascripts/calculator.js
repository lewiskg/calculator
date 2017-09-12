"use strict";

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');


const Calculator = {
	add, subtract, multiply, divide
};

module.exports = Calculator;