const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

const display = document.getElementById("display");

let total = 0;

display.textContent = 0;


zero.addEventListener('click', function(){addNumber(0)});
one.addEventListener('click', function(){addNumber(1)});
two.addEventListener('click', function(){addNumber(2)});
three.addEventListener('click', function(){addNumber(3)});
four.addEventListener('click', function(){addNumber(4)});
five.addEventListener('click', function(){addNumber(5)});
six.addEventListener('click', function(){addNumber(6)});
seven.addEventListener('click', function(){addNumber(7)});
eight.addEventListener('click', function(){addNumber(8)});
nine.addEventListener('click', function(){addNumber(9)});




function addNumber(number){
    if(display.textContent === "0")
    {
        display.textContent = "";
    }
    display.textContent += number;
}