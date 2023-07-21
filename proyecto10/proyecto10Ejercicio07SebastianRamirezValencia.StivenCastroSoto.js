/*
Fecha de publicación: 20/06/2023
Hora: 4:14pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa pide el número de términos deseados de la serie de Narayana y los imprime, teniendo en cuenta que:
- Serie de Narayana: Esta serie comienza con los números 1, 1 y 1. Los siguientes términos se calculan como la suma del término anterior y el número de parejas de términos consecutivos anteriores que son diferentes.
- Los primeros nueve términos de la serie de Narayana son: 1, 1, 1, 2, 3, 4, 6, 9, 13.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Se solicita al usuario que ingrese la cantidad de términos deseados
const obtenerNumero = Math.floor(Number(prompt("Digite la cantidad de términos deseados:")));

// Función para generar y mostrar la serie de Narayana
function serieNarayana(N1, N2, N3, n) {
    process.stdout.write(N1.toString());
    if (n >= 1) {
        if (n === 1) {
            process.stdout.write(", ");
        } else {
            process.stdout.write(", ");
        }
        serieNarayana(N2, N3, N1 + N3, n - 1);
    }
}

// Verificación de la validez del número ingresado
if (obtenerNumero < 0) {
    console.log("Por favor ingrese un valor positivo");
} else if (obtenerNumero === 0) {
    // No se imprime ningún término
} else {
    serieNarayana(1, 1, 1, obtenerNumero - 1);
}