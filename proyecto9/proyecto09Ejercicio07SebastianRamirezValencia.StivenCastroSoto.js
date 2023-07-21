/*
Fecha de publicación: 20/06/2023
Hora: 11:14am
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa solicita al usuario que ingrese dos números y verifica si ambos son pares, ambos son impares o no cumplen ninguna de las dos condiciones.
salvedad este programa solo valida si el numero es mayor que 100 no se pide validar lo contrario 
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Se solicita al usuario que ingrese el primer número
var primerNumeroIngresado = parseInt(prompt("Entre el primer número: "));

// Se solicita al usuario que ingrese el segundo número
var segundoNumeroIngresado = parseInt(prompt("Entre el segundo número: "));

// Se verifica si ambos números son pares, ambos son impares o no cumplen ninguna de las dos condiciones
if (primerNumeroIngresado % 2 === 0 && segundoNumeroIngresado % 2 === 0) {
    console.log("Ambos números son pares.");
} else if (primerNumeroIngresado % 2 !== 0 && segundoNumeroIngresado % 2 !== 0) {
    console.log("Ambos números son impares.");
} else {
    console.log("");
}