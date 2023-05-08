//variables to be use lods hehe
let firstNumbersArr = [];
let secondNumbersArr = [];
let inputDisplay = []; 
let det = "";
let operator = "";

//for number inputs charizz
let zero = document.querySelector('.zero');
zero.addEventListener('click', function(){
    inputDisplay.push("0")
    displayInput();
    addInputs(0);
})

let one = document.querySelector('.one');
one.addEventListener('click', function(){
    inputDisplay.push("1");
    displayInput();
    addInputs(1);
})

let two = document.querySelector('.two');
two.addEventListener('click', function(){
    inputDisplay.push("2");
    displayInput();
    addInputs(2);
})

let three = document.querySelector('.three');
three.addEventListener('click', function(){
    inputDisplay.push("3");
    displayInput();
    addInputs(3);
})

let four = document.querySelector('.four');
four.addEventListener('click', function(){
    inputDisplay.push("4");
    displayInput();
    addInputs(4);
})

let five = document.querySelector('.five');
five.addEventListener('click', function(){
    inputDisplay.push("5");
    displayInput();
    addInputs(5);
})

let six = document.querySelector('.six');
six.addEventListener('click', function(){
    inputDisplay.push("6");
    displayInput();
    addInputs(6);
})

let seven = document.querySelector('.seven');
seven.addEventListener('click', function(){
    inputDisplay.push("7");
    displayInput();
    addInputs(7);
})

let eight = document.querySelector('.eight');
eight.addEventListener('click', function(){
    inputDisplay.push("8");
    displayInput();
    addInputs(8);
})

let nine = document.querySelector('.nine');
nine.addEventListener('click', function(){
    inputDisplay.push("9");
    displayInput();
    addInputs(9);
})

let dot = document.querySelector('.dot');
dot.addEventListener('click', function() {
  addInputs(".");
  inputDisplay.push(".");
  displayInput();
});

//for operators hallerrr
let plus = document.querySelector('.plus');
plus.addEventListener('click', function(){
    det = "second";
    operator = "+";
    inputDisplay.push("+");
    displayInput();
    
})

let minus = document.querySelector('.minus');
minus.addEventListener('click', function(){
    det = "second";
    operator = "-";
    inputDisplay.push("-");
    displayInput();
})

let times = document.querySelector('.times');
times.addEventListener('click', function(){
    det = "second";
    operator = "x";
    inputDisplay.push("x");
    displayInput();
})

let divide = document.querySelector('.divide');
divide.addEventListener('click', function(){
    det = "second";
    operator = "/";
    inputDisplay.push("/");
    displayInput();
})

let percent = document.querySelector('.percent');
percent.addEventListener('click', function(){
    det = "second";
    operator = "%";
    inputDisplay.push("%");
    displayInput();
})

let del = document.querySelector('.del');
del.addEventListener('click', function(){
    deleteInput();
})

let clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    firstNumbersArr = [];
    secondNumbersArr = [];
    inputDisplay = [];
    displayInput();
    let displayResult = document.querySelector('.results');
    displayResult.textContent = "";
    
})

let equals = document.querySelector('.equals')
equals.addEventListener('click', function(){
    calculate();
    det = "";
})

//functions for different processes hehe 
function addInputs(input) {
    if (input === ".") {
      if (det === "second") {
        if (!secondNumbersArr.includes(".")) {
          secondNumbersArr.push(input);
        }
      } else {
        if (!firstNumbersArr.includes(".")) {
          firstNumbersArr.push(input);
        }
      }
    } else {
      if (det !== "second") {
        firstNumbersArr.push(input);
      } else {
        secondNumbersArr.push(input);
      }
    }
  }
  

  function calculate() {
    let firstNumbers = parseFloat(firstNumbersArr.join(""));
    let secondNumbers = parseFloat(secondNumbersArr.join(""));
  
    if (operator == "+") {
      let result = firstNumbers + secondNumbers;
      firstNumbersArr = [result]; // store result as the first number
    } else if (operator == "-") {
      let result = firstNumbers - secondNumbers;
      firstNumbersArr = [result];
    } else if (operator == "x") {
      let result = firstNumbers * secondNumbers;
      firstNumbersArr = [result];
    } else if (operator == "/") {
      let result = firstNumbers / secondNumbers;
      firstNumbersArr = [result];
    } else if (operator == "%") {
      let result = firstNumbers % secondNumbers;
      firstNumbersArr = [result];
    }
    
    // reset for further calculations
    secondNumbersArr = [];
    inputDisplay = [];
    det = "second";
  
    let displayResult = document.querySelector('.results');
    displayResult.textContent = firstNumbersArr[0];
    return firstNumbersArr[0];
}

  
function displayInput(){
    let inputs = document.querySelector('.inputs');
    inputs.textContent = inputDisplay.join("");
}

function deleteInput() {
    if (inputDisplay.length > 0) {
      let lastInput = inputDisplay.pop(); // remove last input from inputDisplay array
      if (isNaN(lastInput)) { // if last input is an operator
        operator = ""; // reset operator
        det = "first"; // set det to "first"
      } else { // if last input is a number
        if (secondNumbersArr.length > 0) { // if there are numbers in the secondNumbersArr
          secondNumbersArr.pop(); // remove last number from secondNumbersArr
        } else { // if there are no numbers in the secondNumbersArr
          operator = ""; // reset operator
          det = "first"; // set det to "first"
          if (inputDisplay.length === 0 || (inputDisplay.length === 0 && !isNaN(inputDisplay[0]))) {
            // if there are no inputs left or the last input is a number
            firstNumbersArr = [];
            secondNumbersArr = [];
            inputDisplay = [];
          }
        }
      }
      displayInput(); // update the input display
    }
  }
