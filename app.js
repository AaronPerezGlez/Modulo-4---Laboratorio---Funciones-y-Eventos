var numberA = () => parseInt(document.getElementById("number1").value);
var numberB = () => parseInt(document.getElementById("number2").value);

var sumar = (a, b) => a + b;
var restar = (a, b) => a - b;
var dividir = (a, b) => a / b;
var multiplicar = (a, b) => a * b;

var esVacio = (a, b) => {
    if (isNaN(a) || isNaN(b)) return true;
    return false;
}

var showSuma = () => {
    var resultado;
    if (esVacio(numberA(), numberB())) resultado = "Error, no es un número";
    else resultado = sumar(numberA(), numberB());
         document.getElementById("resultado").value = resultado;
}

var showResta = () => {
    var resultado;
    if (esVacio(numberA(), numberB())) resultado = "Error, no es un número";
    else resultado = restar(numberA(), numberB());
         document.getElementById("resultado").value = resultado;
}

var showDividir = () => {
    var resultado;
    if (esVacio(numberA(), numberB())) resultado = "Error, no es un número";
    else resultado = dividir(numberA(), numberB());
         document.getElementById("resultado").value = resultado;
}

var showMultiplicar = () => {
    var resultado;
    if (esVacio(numberA(), numberB())) resultado = "Error, no es un número";
    else resultado = multiplicar(numberA(), numberB());
         document.getElementById("resultado").value = resultado;
}

document.getElementById("suma").addEventListener("click", showSuma);
document.getElementById("resta").addEventListener("click", showResta);
document.getElementById("dividir").addEventListener("click", showDividir);
document.getElementById("multiplicar").addEventListener("click", showMultiplicar);












