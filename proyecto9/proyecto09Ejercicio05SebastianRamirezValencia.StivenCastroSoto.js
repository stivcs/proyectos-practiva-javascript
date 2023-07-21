/*
Fecha de publicación: 20/06/2023
Hora: 10:45am
Versión de su código: 1.5
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa, leyendo por teclado la antigüedad en años, calcula el sueldo mensual que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales. Los cálculos se realizan en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más de 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más de 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

console.log("Este programa, leyendo por teclado la antigüedad en años, calcula el sueldo mensual que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales. Los cálculos se realizan en función de los siguientes criterios:\n");
console.log("a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.");
console.log("b. Si lleva menos de 10 años pero más de 5 se le aplica un aumento del 7%.");
console.log("c. Si lleva menos de 5 años pero más de 3 se le aplica un aumento del 5%.");
console.log("d. Si lleva menos de 3 años se le aplica un aumento del 3%.\n");

// Se solicita al usuario que ingrese la antigüedad en años
var numeroDeAños = parseInt(prompt("Entre el número de años de antigüedad del trabajador: "));
var sueldoMensual;

// Se realizan los cálculos en función de la antigüedad del trabajador
if (numeroDeAños > 10) {
    sueldoMensual = (40000 * 1.1) / 12;
    console.log(`El sueldo mensual es de ${sueldoMensual.toFixed(2)} euros.`);
} else if (numeroDeAños <= 10 && numeroDeAños > 5) {
    sueldoMensual = (40000 * 1.07) / 12;
    console.log(`El sueldo mensual es de ${sueldoMensual.toFixed(2)} euros.`);
} else if (numeroDeAños <= 5 && numeroDeAños > 3) {
    sueldoMensual = (40000 * 1.05) / 12;
    console.log(`El sueldo mensual es de ${sueldoMensual.toFixed(2)} euros.`);
} else {
    sueldoMensual = (40000 * 1.03) / 12;
    console.log.(`El sueldo mensual es de ${sueldoMensual.toFixed(2)} euros.`);
}



