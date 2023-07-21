/*
Fecha de publicación: 20/06/2023
Hora: 4:08pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa pide el número de términos deseados de la serie de Padovan y los imprime, teniendo en cuenta que:
- Serie de Padovan: Esta serie comienza con los números 1, 0 y 0. Los siguientes términos se calculan como la suma de los dos términos anteriores y el tercer término anterior.
- Los primeros nueve términos de la serie de Padovan son: 1, 0, 0, 1, 0, 1, 1, 1, 2.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Se solicita al usuario que ingrese la cantidad de términos deseados
const obtenerNumero = Math.floor(Number(prompt("Digite la cantidad de términos deseados:")));

// Función para generar y mostrar la serie de Padovan
function seriePadovan(P1, P2, P3, n) {
    process.stdout.write(P1.toString());
    if (n >= 1) {
        if (n === 1) {
            process.stdout.write(", ");
        } else {
            process.stdout.write(", ");
        }
        seriePadovan(P2, P3, P1 + P2, n - 1);
    }
}

// Verificación de la validez del número ingresado
if (obtenerNumero < 0) {
    console.log("Por favor ingrese un valor positivo");
} else if (obtenerNumero === 0) {
    // No se imprime ningún término
}else {
    
    seriePadovan(1, 0, 0, obtenerNumero - 1);
}