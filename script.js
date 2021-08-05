// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
// Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’

function addIt()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        a = parseFloat(num1);
        b = parseFloat(num2);
        document.getElementById("result").innerHTML = a + b;
}
function subtractIt()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 - num2;
}
function multiplyIt()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideIt() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}