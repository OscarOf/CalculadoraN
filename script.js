//Declaramos variables 
/*SE DECLARAN LAS VARIABLES GLOBALES LAS CUALES SE LES ASIGNA EL VALOR DE LO QUE INGRESA EL USUARIO Y A SU VEZ LA OPERACIÓN A REALIZAR*/
var operandoa;
var operandob;
var operacion;

/*SE CREA LA FUNCIÓN init, LA CUAL ASIGNA TANTO LOS NÚMEROS COMO LAS OPERACIONES A VARIABLES MEDIANTE EL ID (getElementById) ASIGNADO EN EL HTML*/
function init() {
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

//Eventos de click

/*SE ASIGNA UN EVENTO DE CLIC PARA CADA VARIABLE*/
uno.onclick = function (e) {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function (e) {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function (e) {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function (e) {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function (e) {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function (e) {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function (e) {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function (e) {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function (e) {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function (e) {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function (e) {
    resetear();
}
/*Se crean las funciones que asignan el valor de un signo + a la variable operación */
suma.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
/*Se crean las funciones que asignan el valor de un signo - a la variable operación */
resta.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
/*Se crean las funciones que asignan el valor de un signo * a la variable operación */
multiplicacion.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
/*Se crean las funciones que asignan el valor de un signo / a la variable operación */
division.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
/*Aquí la función nos lleva a otra función que de acuerdo a la operación seleccionada se resolverá con la variables ingresadas anteriormente */
igual.onclick = function (e) {
    operandob = resultado.textContent;
    resolver();
}
/*Deja en blanco el campo resultado */
function limpiar() {
    resultado.textContent = "";
}
/*Asigna un valor en blanco para las variables Sting y 0 para las variables que reciban números */
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
/*Dependiendo del valor de operación, asignado por el usuario, se realizará la operación de alguna de la opciones en el switch */
function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":/*Se almacena la operación matemática en la variable res */
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();/*Llama a la función resetear para dejar los campos en blanco para el siguiente ingreso de datos */
    
    resultado.textContent = "El resultado es "+ res;/*Se muestra la variable res en el elemento con id resultado */
}