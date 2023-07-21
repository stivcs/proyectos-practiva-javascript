/*
Fecha de publicación: 20/06/2023
Hora: 4:17pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa pide el número de términos deseados de la serie de Perrin y los imprime, teniendo en cuenta que:
- Serie de Perrin: Esta serie comienza con los números 3, 0 y 2. Los siguientes términos se calculan como la suma del término anterior y el tercer término anterior.
- Los primeros nueve términos de la serie de Perrin son: 3, 0, 2, 3, 2, 5, 5, 7, 10.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.
*/

// Se importa y guarda la funcionalidad de la función prompt
var prompt = require('prompt-sync')();

// Se solicita al usuario que ingrese la cantidad de términos deseados
const obtenerNumero = Math.floor(Number(prompt("Digite la cantidad de términos deseados:")));

// Función para generar y mostrar la serie de Perrin
function seriePerrin(P1, P2, P3, n) {
    process.stdout.write(P1.toString());
    if (n >= 1) {
        if (n === 1) {
            process.stdout.write(", ");
        } else {
            process.stdout.write(", ");
        }
        seriePerrin(P2, P3, P1 + P2, n - 1);
    }
}

// Verificación de la validez del número ingresado
if (obtenerNumero < 0) {
    console.log("Por favor ingrese un valor positivo");
} else if (obtenerNumero === 0) {
    // No se imprime ningún término
} else {
    
    seriePerrin(3, 0, 2, obtenerNumero - 1);
}