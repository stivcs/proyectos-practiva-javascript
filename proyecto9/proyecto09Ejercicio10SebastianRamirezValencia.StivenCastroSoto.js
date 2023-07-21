/*
-Fecha de publicación: 20/06/2023
-Hora: 12:03am
- Versión de su código 1.3
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- este programa calcula la nota promedio de tres notas ingresados por el teclado
*/

var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese la primera nota de 1 a 5
const nota1 = parseFloat(prompt("Ingresa la primera nota de 1 a 5:"));

// Solicitar al usuario que ingrese la segunda nota de 1 a 5
const nota2 = parseFloat(prompt("Ingresa la segunda nota de 1 a 5:"));

// Solicitar al usuario que ingrese la tercera nota de 1 a 5
const nota3 = parseFloat(prompt("Ingresa la tercera nota de 1 a 5:"));

// Calcular el promedio de las tres notas ingresadas
const promedio = (nota1 + nota2 + nota3) / 3;

// Verificar si el promedio es mayor o igual a 3.0
if (promedio >= 3.0) {
  console.log("El alumno ha aprobado");
} else {
  console.log("El alumno ha reprobado");
}