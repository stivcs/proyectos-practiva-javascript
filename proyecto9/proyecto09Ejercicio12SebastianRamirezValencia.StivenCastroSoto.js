/*
-Fecha de publicación: 20/06/2023
-Hora: 12:15pm
- Versión de su código 1.4
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- este programa el salario de un obrero
-Salvedades si las hubiese: este programa solo sirve para valores entre 1 y 5 si se ingresan valores fuera de este rango no se garantizan los resultados
*/

var prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese el número de horas trabajadas por el obrero
const horas = parseFloat(prompt("Digite el número de horas trabajadas por el obrero:"));

// Calcular las horas extras trabajadas por el obrero
const H_extra = horas - 40;

// Verificar si el número de horas trabajadas es mayor a 40
if (horas > 40) {
  // Calcular el salario semanal teniendo en cuenta las horas extras
  const salario = (40 * 16) + (H_extra * 20);
  console.log(`El salario semanal del obrero es de: ${salario}`);
} else {
  // Calcular el salario semanal sin horas extras
  const salario = horas * 16;
  console.log(`El salario semanal del obrero es de: ${salario}`);
}
