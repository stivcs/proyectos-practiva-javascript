/*
-Fecha de publicación: 20/06/2023
-Hora: 2:50pm
- Versión de su código 1.1
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- este programa recibe un numero y dice si es capicua o no 
*/

var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número de tres cifras
const num = parseInt(prompt("Ingrese un número de tres cifras: "));

// Obtener el cociente de la división del número por 100
const oper1 = Math.floor(num / 100);

// Obtener el residuo de la división del número por 10
const oper2 = num % 10;

// Imprimir el cociente y el residuo en la consola
console.log(oper1);
console.log(oper2);

// Verificar si el cociente y el residuo son iguales
if (oper1 === oper2) {
  console.log(num + " es un número capicúa");
} else {
  console.log(num + " no es un número capicúa");
}