 


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousDisplayOperand = document.querySelector('[data-previous-operand]')
const currentDisplayOperand = document.querySelector('[data-current-operand]')
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
*/
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

    function operate(operator){
        previousNum = Number(previousNum)
        currentNum = Number(currentNum)

        if(operator === "+"){ 
            previousNum += currentNum;
        } else if (operator === "-") {
            previousNum -= currentNum;
        } else if (operator === "*") {
            previousNum *= currentNum;
        } else if (operator === "/") {
            if(currentNum <= 0) {
                previousNum = "Error";
                displayResult();
               return;
            }
            previousNum /= currentNum;
        }
        previousNum = roundNumber(previousNum);
        previousNum = previousNum.toString();
        displayResult();
}

        function roundNumber(num) {
            return Math.round(num * 100000) / 100000;
        }

        function displayResult() {
        previousDisplayOperand.textContent = "";
        operator = "";
        if(previousNum.length <= 11) {
            currentDisplayOperand.textContent = previousNum;
        } else {
            currentDisplayOperand.textContent = previousNum.slice(0, 11) + "...";
        }
        }

        equalsButton.addEventListener('click', () => {
           if(currentNum != "" &&  previousNum != "") {
            operate();
           }
        });

        clear.addEventListener('click', clearCalculator => {

        })



/*
switch(operator){ 
    case "+": 
    previousNum = previousNum + currentNum;
    break;
    case "-":
    previousNum = previousNum - currentNum;
    break;
    case "*":
    previousNum = previousNum * currentNum;
    break;
    case "/":
    previousNum = previousNum / currentNum;
    break;
} 
*/