/*
-Fecha de publicación: 20/06/2023
-Hora: 2:45pm
- Versión de su código 1.9
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
-Salvedades si las hubiese: este programa solo sirve para valores entre 1 y 5 si se ingresan valores fuera de este rango no se garantizan los resultados
*/


var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese los kilómetros recorridos
const kmh = parseFloat(prompt("Ingrese cuántos kilómetros recorrió: "));

// Definir una función para calcular el porcentaje de un total
function porcentaje(total, porcentaje) {
  return (total * porcentaje) / 100;
}

// Calcular el exceso de kilómetros después de 300
const exceso1 = kmh - 300;

// Calcular el exceso de kilómetros después de 1000
const exceso2 = kmh - 1000;

// Calcular el valor adicional del descuento en función del exceso de kilómetros
const adicional = exceso1 * 15000;
const adicional2 = exceso2 * 10000;

// Verificar los diferentes rangos de kilómetros recorridos
if (kmh <= 300) {
  console.log("El monto total a pagar es de: 400000");
  console.log("El impuesto pagado es de:", porcentaje(400000, 20));
} else if (kmh > 300 && kmh <= 1000) {
  console.log("El monto total a pagar es de:", 400000 + adicional);
  console.log("El impuesto pagado es de:", porcentaje(400000 + adicional, 20));
} else {
  console.log("El monto total a pagar es de:", 400000 + adicional2);
  console.log("El impuesto pagado es de:", porcentaje(400000 + adicional2, 20));
}
