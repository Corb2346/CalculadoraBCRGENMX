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

/* if(choice === '.' && !display.textContent.includes('.')){ //cuando ya no es sero 
  display.textContent += choice; //concatena los numeros presionados 
  number1 = display.textContent;
  }  else if(choice !== '.'){
       display.textContent += choice; //concatena los numeros presionados 
       number1 = display.textContent;
  } */
function setToDisplay(digit) {
  
   /* if(display().innerHTML.length < 25 || digit != '.'){
        display().innerText == "0.00" || display().innerText == "+" || display().innerText == "-" 
    ||  display().innerText == "*" || display().innerText == "/" ? display().innerText = digit : display().innerText += digit;
   } else if(digit == '.' && display().innerText.includes('.')){
    null
   } */

    
   if(display().innerHTML.length < 25)
    display().innerText == "0.00" || display().innerText == "+" || display().innerText == "-" 
  ||  display().innerText == "*" || display().innerText == "/"  ? display().innerText = digit : digit!='.'||! display().innerText.includes('.') ? display().innerText += digit :null ;

  console.log(digit);
}

function readNumber() {
  
    let number = display().innerText;
    return number;
}

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
        display().innerText = result;
        return add(a, b)
      case '-':
        console.log("la resta es: " + substract(a, b));
        result= substract(a, b);
        display().innerText = result;
        return substract(a, b)
      case '*':
        console.log("la multiplicacion es: " + multiply(a, b));
        result=  multiply(a, b);
        display().innerText = result;
        return multiply(a, b)
      case '/':
        if (b === 0) {
        display().innerText = "infinity";
        return null
        } else {
          result= divide(a, b);
          display().innerText =  result;
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







