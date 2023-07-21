/*
Fecha de publicación: 20/06/2023
Hora: 3:45pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa pide el número de términos deseados de la serie de Lucas y los imprime, teniendo en cuenta que:
- Serie de Lucas: Es similar a la serie de Fibonacci, pero comienza con los números 2 y 1 en lugar de 0 y 1.
- Los primeros nueve términos de la serie de Lucas son: 2, 1, 3, 4, 7, 11, 18, 29, 47.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.
*/

console.log("Este programa pide el número de términos deseados de la serie de Lucas y los imprime, teniendo en cuenta que:");
console.log("Serie de Lucas: Es similar a la serie de Fibonacci, pero comienza con los números 2 y 1 en lugar de 0 y 1.");

var prompt = require('prompt-sync')();
// Solicitar al usuario el número de términos deseados de la serie de Lucas
const obtenerNumero = Math.floor(Number(prompt("Digite la cantidad de términos deseados:")));

// Definir una función recursiva para generar la serie de Lucas
function serieLucas(L1, L2, n) {
    process.stdout.write(L1.toString());
    if (n >= 1) {
        if (n === 1) {
            process.stdout.write(", ");
        } else {
            process.stdout.write(", ");
        }
        serieLucas(L2, L1 + L2, n - 1);
    }
}

// Verificar el número de términos ingresado
if (obtenerNumero < 0) {
    console.log("Por favor ingrese un valor positivo");
} else if (obtenerNumero === 0) {
    // No se imprime ningún término
} else if (obtenerNumero === 1) {
    
} else {
    
    serieLucas(2, 1, obtenerNumero - 1);
}