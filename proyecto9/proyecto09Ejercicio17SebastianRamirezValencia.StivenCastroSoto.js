/*
-Fecha de publicación: 20/06/2023
-Hora: 1:35pm
- Versión de su código 1.1
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa cualcula en IMC teniendo en cuenta la altura y el peso
*/

var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el peso en kg
const peso = parseFloat(prompt("Digite el peso [kg]: "));

// Solicitar al usuario que ingrese la altura en metros
const altura = parseFloat(prompt("Digite la altura [m]: "));

// Calcular el índice de masa corporal (IMC)
const imc = peso / (altura ** 2);

// Realizar las comprobaciones condicionales para determinar la clasificación del IMC
if (imc < 16) {
  console.log("Criterio de ingreso en hospital");
} else if (imc >= 16 && imc < 17) {
  console.log("Infrapeso");
} else if (imc >= 17 && imc < 18) {
  console.log("Bajo peso");
} else if (imc >= 18 && imc < 25) {
  console.log("Peso normal (saludable)");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso (Obesidad grado I)");
} else if (imc >= 30 && imc < 35) {
  console.log("Sobrepeso crónico (obesidad grado II)");
} else if (imc >= 35 && imc < 40) {
  console.log("Obesidad premórbida (obesidad grado III)");
} else {
  console.log("Obesidad mórbida (obesidad de grado IV)");
}
