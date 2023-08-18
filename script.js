const numberButtons = document.querySelectorAll('[data-number]')
const decimalButton = document.querySelector('[data-decimal]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousDisplayOperand = document.querySelector('[data-previous-operand]')
const currentDisplayOperand = document.querySelector('[data-current-operand]')

let currentNum = '';
let previousNum = '';
let operator  = '';

    window.addEventListener('keydown', handleKeyPress)
    
    numberButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            handleNumber(e.target.textContent);
        });
    });

    function handleNumber(number) {
        if(previousNum !== "" && currentNum !== "" && operator === ""){
        previousNum = ""
        currentDisplayOperand.textContent = currentNum; 
        }
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
        if (previousNum === "") {
            previousNum = currentNum;
            operatorcheck(op)
        } else if (currentNum === "") {
            operatorcheck(op)
        } else {
            operate()
            operator = op;
            currentDisplayOperand.textContent = "0";
            previousDisplayOperand.textContent = previousNum + " " + operator;
        }
    }

    function operatorcheck(text) {
        operator = text;
        previousDisplayOperand.textContent = previousNum + " " + operator;
        currentDisplayOperand.textContent = "0";
        currentNum = "";
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
        if(previousNum.length <= 11) {
            currentDisplayOperand.textContent = previousNum;
        } else {
            currentDisplayOperand.textContent = previousNum.slice(0, 11) + "...";
        }
        previousDisplayOperand.textContent = "";
        operator = "";
        currentNum = "";
        }

        equalsButton.addEventListener('click', () => {
           if(currentNum != "" &&  previousNum != "") {
            operate(operator);
           }
        });

        allClearButton.addEventListener('click', clearCalculator)
        function clearCalculator() {
            currentNum = "";
            previousNum = "";
            operator = "";
            currentDisplayOperand.textContent = "0"
            previousDisplayOperand.textContent = "";
        }
         
        decimalButton.addEventListener('click', addDecimal)        
        function addDecimal(){
            if(!currentNum.includes('.')){
                currentNum += "."
                currentDisplayOperand.textContent = currentNum;
            }
        }

        function handleKeyPress(e) {
            e.preventDefault()
            if(e.key >= 0 && e.key <= 9) {
                handleNumber(e.key)
            }
            if(e.key === "Enter" || 
            e.key === "=" && currentNum != "" && previousNum != "")
            {
                operate(operator);
            }
            if(e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/"){
                handleOperator(e.key)
            }
            if(e.key === "."){
                addDecimal()
            }
            if(e.key === "Backspace"){
                handleDelete(e.key)
            }
        }

        function handleDelete() {
            if(currentNum != ""){
                currentNum = currentNum.slice(0, -1);
                currentDisplayOperand.textContent = currentNum;
                if(currentNum === ""){
                currentDisplayOperand.textContent = "0";
                }
            }
            if(currentNum === "" && previousNum != "" && operator === ""){
                previousNum = previousNum.slice(0, -1)
                currentDisplayOperand.textContent = previousNum;
            }
        }   