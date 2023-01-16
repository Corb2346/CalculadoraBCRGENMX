
let number1 = 0;
let operator = "";
let secondOperator = "";
let number2 = 0;
let result = 0;

const display = () => document.getElementById("display");

function clearDisplay() {
  display().innerText = "0.00";
  number1 = 0;
  number2 = 0;
  operator = "";
  result = 0;
}

function setToDisplay(digit) {

  if (display().innerHTML.length < 24)
    display().innerText == "0.00" || display().innerText == "+" || display().innerText == "-"
      || display().innerText == "*" || display().innerText == "/" ? display().innerText = digit : digit != '.' ||
        !display().innerText.includes('.') ? display().innerText += digit : null;
}

const redNumberFromDisplay = () => {
  let number = display().innerText;
  return number;
}

function getOperation(operation) {
  operator = operation;
  number1 = redNumberFromDisplay();
  display().innerText = operation; 
}

function operate() {
  number2 = redNumberFromDisplay();
  a = parseFloat(number1);
  b = parseFloat(number2);
    switch (operator) {
      case '+':
        result = add(a, b);
        display().innerText = result;
        return result
      case '-':
        result = substract(a, b);
        display().innerText = result;
        return substract(a, b)
      case '*':
        result = multiply(a, b);
        display().innerText = result;
        return multiply(a, b)
      case '/':
        if (b === 0) {
          display().innerText = "infinity";
          return null
        } else {
          result = divide(a, b);
          display().innerText = result;
          return divide(a, b)
        }
      default:
        return null     
    }  
  } 

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b

const divide = (a, b) => a / b;







