/*
Fecha de publicación: 20/06/2023
Hora: 10:23am
Versión de su código: 1.3
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación

Este programa lee un número entre [1 y 12] e imprime el mes que le corresponde en el año. Referencia: 1=Enero, 12=Diciembre.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

console.log("Este programa lee un número entre [1 y 12] e imprime el mes que le corresponde en el año. Referencia: 1=Enero, 12=Diciembre.");

// Se solicita al usuario que ingrese un número
var numeroIngresado = parseInt(prompt("Entre un número: "));

// Se utiliza una estructura de control switch para determinar el mes correspondiente al número ingresado
switch (numeroIngresado) {
    case 1:
        console.log("El mes es Enero.");
        break;

    case 2:
        console.log("El mes es Febrero.");
        break;

    case 3:
        console.log("El mes es Marzo.");
        break;

    case 4:
        console.log("El mes es Abril.");
        break;

    case 5:
        console.log("El mes es Mayo.");
        break;

    case 6:
        console.log("El mes es Junio.");
        break;

    case 7:
        console.log("El mes es Julio.");
        break;

    case 8:
        console.log("El mes es Agosto.");
        break;

    case 9:
        console.log("El mes es Septiembre.");
        break;

    case 10:
        console.log("El mes es Octubre.");
        break;

    case 11:
        console.log("El mes es Noviembre.");
        break;

    case 12:
        console.log("El mes es Diciembre.");
        break;

    default:
        console.log("Número no válido.");
        break;
}
