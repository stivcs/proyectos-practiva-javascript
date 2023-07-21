/*
Fecha de publicación: 20/06/2023
Hora: 1:11am
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa imprime una pirámide formada por letras utilizando recursión.
*/


function imprimirEspacios(n) {
    if (n > 0) {
        process.stdout.write(' '); // Imprimir un espacio en blanco
        imprimirEspacios(n - 1); // Llamar recursivamente a la función decrementando el número de espacios
    }
}


function imprimirLetras(letra, n) {
    if (n > 0) {
        process.stdout.write(String.fromCharCode(letra)); // Imprimir una letra utilizando el código ASCII
        imprimirLetras(letra, n - 1); // Llamar recursivamente a la función decrementando el número de letras
    }
}


function imprimirPiramide(renglon, letra) {
    if (renglon > 0) {
        imprimirEspacios(renglon - 1); // Imprimir espacios en blanco antes de las letras
        imprimirLetras(letra, 13 - (renglon * 2) + 2); // Imprimir las letras correspondientes al renglón actual
        console.log(); // Imprimir un salto de línea
        imprimirPiramide(renglon - 1, letra - 2); // Llamar recursivamente a la función decrementando el número de renglones y el código ASCII de la letra
    }
}

imprimirPiramide(7, 80); // Iniciar la impresión de la pirámide con 7 renglones y la letra "P" (código ASCII 80)
