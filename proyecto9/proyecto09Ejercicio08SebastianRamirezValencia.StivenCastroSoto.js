/*
-Fecha de publicación: 20/06/2023
-Hora: 11:46am
- Versión de su código 1.5
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa lee tres numeros por teclado he imprime si la multiplicacion de los dos primeros es igual al tecer numero 
-Salvedades si las hubiese:este programa solo lee valores numero de no ingresar este tipo de valores no se garantizan los resultados 
*/


var prompt = require('prompt-sync')();


// Solicitar al usuario que ingrese el primer número
const num1 = parseInt(prompt("Ingresa el primer número:"));

// Solicitar al usuario que ingrese el segundo número
const num2 = parseInt(prompt("Ingresa el segundo número:"));

// Solicitar al usuario que ingrese el tercer número
const num3 = parseInt(prompt("Ingresa el tercer número:"));

// Verificar si el tercer número es igual a la multiplicación de los dos primeros números
if (num3 === num1 * num2) {
  console.log("El resultado de la multiplicación de los dos primeros números es igual al tercer número.");
} else {
  console.log("El resultado de la multiplicación de los dos primeros números es diferente al tercer número.");
}