/*
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;  
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator){
switch(operator) {
    case "+":
    return add(a, b);
    case "-":
    return add(a, b);
    case "*":
    return multiply(a, b);
    case "/":
    return divide(a, b);
}
}


function populateDisplay(){
}
*/
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement)
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

function clear() {
}

function deleteBtn() {
}

function appendNumber(number) {
}

function chooseOperation(operation) {
}

function compute() {
}

function updateDisplay() {
}
