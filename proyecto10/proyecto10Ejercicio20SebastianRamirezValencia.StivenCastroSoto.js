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
Este programa imprime una pirámide formada por letras "A" utilizando recursión.
*/


function imprimirRenglon(espacios, letras) {
    if (espacios > 0) {
        process.stdout.write(" "); // Imprimir un espacio en blanco
        imprimirRenglon(espacios - 1, letras); // Llamar recursivamente a la función decrementando el número de espacios
    } else if (letras > 0) {
        process.stdout.write("A"); // Imprimir la letra "A"
        imprimirRenglon(espacios, letras - 1); // Llamar recursivamente a la función decrementando el número de letras
    } else {
        console.log(); // Imprimir un salto de línea cuando se completan los espacios y letras
    }
}


function imprimirPiramide(renglon) {
    if (renglon > 0) {
        const espacios = 79 - renglon + 1; // Calcular el número de espacios en blanco para el renglón actual
        const letras = renglon; // El número de letras "A" para el renglón actual
        imprimirRenglon(espacios, letras); // Imprimir el renglón con los espacios y letras correspondientes
        imprimirPiramide(renglon - 1); // Llamar recursivamente a la función decrementando el número de renglones
    }
}

imprimirPiramide(25); // Iniciar la impresión de la pirámide con 25 renglones
