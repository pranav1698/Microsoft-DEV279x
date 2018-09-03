var username = window.prompt("Please enter your name:");

var greetingName = document.getElementById("greeting");
greetingName.innerHTML += " , " + username;


var num1 = parseInt(window.prompt("Enter operand 1: "));
var operand1 = document.getElementById("operand1");
operand1.innerHTML += num1;

var num2 = parseInt(window.prompt("Enter operand 2: "));
var operand2 = document.getElementById("operand2");
operand2.innerHTML += num2;


var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var fraction = num1 / num2;
var modulus = num1 % num2;

document.getElementById("addition").innerHTML = "The sum of " + num1 + " and " + num2 +" is " + sum;
document.getElementById("subtraction").innerHTML = "The difference of " + num1 + " and " + num2 +" is " + difference;
document.getElementById("multiplication").innerHTML = "The product of " + num1 + " and " + num2 +" is " + product;
document.getElementById("divison").innerHTML = "The fractin of " + num1 + " and " + num2 +" is " + fraction;
document.getElementById("modulus").innerHTML = "The modulus of " + num1 + " and " + num2 +" is " + modulus;

