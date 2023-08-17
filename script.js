 


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousDisplayOperand = document.querySelector('[data-previous-operand]')
const currentDisplayOperand = document.querySelector('[data-current-operand]')

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

let currentNum = '';
let previousNum = '';
let operator  = '';
    
    numberButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleNumber(e.target.textContent);
        });
    });

    function handleNumber(number) {
        if (currentNum.length <= 11) {
            currentNum += number;
            currentDisplayOperand.textContent = currentNum;
        }
    }

    operationButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleOperator(e.target.textContent);
        });
    });

    function handleOperator(op) {
        operator = op;
        previousNum = currentNum;
        previousDisplayOperand.textContent = previousNum + " " + operator;
        currentNum = ""; 
        currentDisplayOperand.textContent = "";
    }

    function operate(a, b, op){
        switch(op) {
            case "+":
            return ;
            break;
            case "-":
            return subtract(a, b);
            break;
            case "*":
            return multiply(a, b);
            break;
            case "/":
            return divide(a, b);
            break;
        }
        }

equalsButton.addEventListener('click', (e) => {

})

