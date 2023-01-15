const inputNumbers = [];
let number1;
let operator;
let number2;
let result;
let operationStatus;

const display = () => document.getElementById("display");
console.log(display);

function clearDisplay() {
    console.log("Borra el contenido de la pantalla");
    display().innerText = "0.00"
}

function setToDisplay(digit) {
  
   if(display().innerHTML.length < 25)
  display().innerText == "0.00" || display().innerText == "+" || display().innerText == "-" || display().innerText == "*" || display().innerText == "/" ? display().innerText = digit : display().innerText += digit;
  console.log(digit);
}

function readNumber() {
  
    let number = display().innerText;
    return number;
}

/* 
function readNumber2(){
    let number2 = display().innerText;
    console.log(number2);
}
 */
/* function setOperation(operation){
    readNumber();
    display().innerText = operation; 
    
    
} */

function getOperation(operation) {
    operator = operation;
    number1 = readNumber();
    console.log("numero guardado: "+number1);
    console.log("operacion recibida" + operation);
    console.log("operacrion en variable operator: "+operator);
    display().innerText = operation;
    
}

function operate() {
    
     number2 = readNumber();
     console.log("operacion recuperada en operator: " + operator);
     console.log(typeof(operator));
     console.log("numero guardado: " + number2);
     console.log("numero guardado: " + typeof(number2));

      a = parseFloat(number1);
      b = parseFloat(number2);
      console.log("numero guardado: " + typeof(b));

    switch (operator) {
      case '+':
        console.log("la suma es: " + add(a, b));
        result= add(a, b);
        display().innerText = Number(result).toFixed(4);
        return add(a, b)
      case '-':
        console.log("la resta es: " + substract(a, b));
        result= substract(a, b);
        display().innerText = Number(result).toFixed(4);
        return substract(a, b)
      case '*':
        console.log("la mulstiplicacion es: " + multiply(a, b));
        result=  multiply(a, b);
        display().innerText = Number(result).toFixed(4);
        return multiply(a, b)
      case '/':
        if (b === 0) {
        display().innerText = "infinity";
        return null
        } else {
          result= divide(a, b);
          display().innerText =  Number(result).toFixed(4);
          return divide(a, b)
          }
      default:
        console.log("no se que hacer");
        return null
    }
  }


function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}





