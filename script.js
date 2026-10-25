const digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const para = document.createElement("p");

let firstNumber = "";

const operators = document.querySelectorAll(".operator");

let currentOperator = "";

let secondNumber = "";

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
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
    
    switch (operator) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return null;
    }
}

equals.addEventListener("click", () => {

    if (firstNumber === "" || currentOperator === "" || secondNumber === "") return;

    let result = operate(currentOperator, firstNumber, secondNumber);
    display.textContent = result;
    if (result === "Error!") {
        firstNumber = ""; // Eğer hata varsa firstNumber'ı "Error!" YAPMA, boş bırak
    } else {
        firstNumber = result.toString();
    }
    secondNumber = "";
    currentOperator = "";
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
})