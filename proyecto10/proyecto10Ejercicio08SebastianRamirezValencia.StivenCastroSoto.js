/*
Fecha de publicación: 20/06/2023
Hora: 5:46pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa pide el número de términos deseados de la serie de Catalán y los imprime, teniendo en cuenta que:
- Serie de Catalán: Esta serie es una secuencia de números que aparece en diversos problemas de conteo en matemáticas. Comienza con los números 1, 1, y los siguientes términos se calculan como la suma de los productos de los términos anteriores.
- Los primeros nueve términos de la serie de Catalán son: 1, 1, 2, 5, 14, 42, 132, 429, 1430.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Se solicita al usuario que ingrese la cantidad de términos deseados
const obtenerNumero = Math.floor(Number(prompt("Digite la cantidad de términos deseados:")));

// Función para calcular el factorial de un número
function calcularFactorial(num) {
    
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// Función para generar y mostrar la serie de Catalán
function serieCatalan(n) {
    
    for (let i = 0; i < n; i++) {
        const catalan = calcularFactorial(2 * i) / (calcularFactorial(i + 1) * calcularFactorial(i));
        process.stdout.write(catalan.toString());
        process.stdout.write(", ");
    }
}

// Verificación de la validez del número ingresado
if (obtenerNumero < 0) {
    console.log("Por favor ingrese un valor positivo");
} else if (obtenerNumero === 0) {
    // No se imprime ningún término
} else {
    serieCatalan(obtenerNumero);
}