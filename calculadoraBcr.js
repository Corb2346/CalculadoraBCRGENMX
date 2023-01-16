
let number1;
let operator;
let secondOperator;
let number2;
let result;

const display = () => document.getElementById("display");

function clearDisplay() {
    display().innerText = "0.00";
    number1=0;
    number2=0;
    operator="";
    result=0;
}

function setToDisplay(digit) {
  
   if(display().innerHTML.length < 24)
  display().innerText == "0.00" || display().innerText == "+" || display().innerText == "-" 
  ||  display().innerText == "*" || display().innerText == "/"  ? display().innerText = digit : digit!='.'||
  !display().innerText.includes('.') ? display().innerText += digit :null ;

}

const redNumberFromDisplay = () => {
    let number = display().innerText;
    return number;
}

function getOperation(operation) {
    operator = operation;
    number1 = redNumberFromDisplay();
    console.log("numero guardado: "+number1);
    console.log("operacion recibida" + operation);
    console.log("operacrion en variable operator: "+operator);
    display().innerText = operation;
    
}

function operate() {
    
     number2 = redNumberFromDisplay();
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

const add = (a, b) => a +b ;

const substract = (a, b) => a -b;

const multiply = (a, b) => a * b

const divide = (a, b) => a / b ;







