/*
Fecha de publicación: 20/06/2023
Hora: 10.11am
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa lee un número entre [1 y 7] e imprime el día que le corresponde en la semana. Referencia: 1=Lunes, 7=Domingo." 1=Lunes, 7=Domingo.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

console.log("Este programa lee un número entre [1 y 7] e imprime el día que le corresponde en la semana. Referencia: 1=Lunes, 7=Domingo.");

// Se solicita al usuario que ingrese un número
var numeroIngresado = parseInt(prompt("Entre un número: "));

// Se utiliza una estructura de control switch para determinar el día correspondiente al número ingresado
switch (numeroIngresado) {
    case 1:
        console.log("El día es lunes.");
        break;

    case 2:
        console.log("El día es martes.");
        break;

    case 3:
        console.log("El día es miércoles.");
        break;

    case 4:
        console.log("El día es jueves.");
        break;

    case 5:
        console.log("El día es viernes.");
        break;

    case 6:
        console.log("El día es sábado.");
        break;

    case 7:
        console.log("El día es domingo.");
        break;

    default:
        console.log("Número no válido.");
        break;
}
