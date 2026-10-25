const digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const para = document.createElement("p");

let firstNumber = "";

const operators = document.querySelectorAll(".operator");

let currentOperator = "";

let secondNumber = "";

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (isCalculated && currentOperator == ""){
            firstNumber = "";
            isCalculated = false;
        }
        if (currentOperator == ""){
            firstNumber += digit.textContent;
            display.textContent = firstNumber;
        }
        else if (currentOperator != ""){
            secondNumber += digit.textContent;
            display.textContent = firstNumber + currentOperator + secondNumber;
        }
        console.log(`firstNumber: ${firstNumber}`);
        console.log(`secondNumber: ${secondNumber}`);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        isCalculated = false;
        if (firstNumber === "" || firstNumber === "Error!") return;

        if (firstNumber !== "" && currentOperator !== "" && secondNumber !== "") {
            let result = operate(currentOperator, firstNumber, secondNumber);
            
            if (result === "Error!") {
                display.textContent = "Error!";
                firstNumber = "";
                secondNumber = "";
                currentOperator = "";
                return; // Hatadan sonra operatörü eklemeden dur
            }

            firstNumber = result.toString();
            secondNumber = "";
        }

        currentOperator = operator.textContent;
        display.textContent = firstNumber + currentOperator;
    });
});

const equals = document.querySelector(".equals")

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) {
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
        return "Error!";
    }
    return a / b; 
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    let result;
    
    switch (operator) {
        case "+": result = add(a, b); break;
        case "-": result = subtract(a, b); break;
        case "*": result = multiply(a, b); break;
        case "/": result = divide(a, b); break;
        default: return null;
    }

    if (typeof result === "number") {
        result = Math.round(result * 10000) / 10000;
    }

    return result;
}

let isCalculated = false;

equals.addEventListener("click", () => {

    if (firstNumber === "" || currentOperator === "" || secondNumber === "") return;

    let result = operate(currentOperator, firstNumber, secondNumber);
    display.textContent = result;
    if (result === "Error!") {
        firstNumber = ""; // Eğer hata varsa firstNumber'ı "Error!" YAPMA, boş bırak
    } else {
        firstNumber = result.toString();
        isCalculated = true;
    }
    secondNumber = "";
    currentOperator = "";
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    isCalculated = false;
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
})