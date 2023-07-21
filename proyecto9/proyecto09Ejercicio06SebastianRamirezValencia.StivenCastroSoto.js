/*
Fecha de publicación: 20/06/2023
Hora: 10:50am
Versión de su código: 1.6
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa lee un número ingresado por el usuario y verifica si es mayor que 100.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Se solicita al usuario que ingrese un número
var numeroIngresado = parseInt(prompt("Entre un número: "));

// Se verifica si el número ingresado es mayor que 100 y se imprime el resultado correspondiente
if (numeroIngresado > 100) {
    console.log("El número es mayor que 100.");
}
