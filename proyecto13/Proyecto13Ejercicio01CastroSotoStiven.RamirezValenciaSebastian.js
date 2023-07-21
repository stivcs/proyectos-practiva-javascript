/*
Fecha de publicación: 23/06/2023
Versión de su código: 2
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Este programa presenta un rectangulo de dimensiones ingresadas por el usuario el rectangulo dibujado en sus esquinas tiene "/""\""\""/" y para el medio son "*"
*/

// Importar el módulo 'prompt-sync' para solicitar la entrada del usuario
var prompt = require('prompt-sync')();

// Función para imprimir una línea horizontal de caracteres
const imprimirHorizontal = (ancho, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha) => {
  if (ancho === 1 && stop !== 1) {
    // Caso base: imprimir el carácter del extremo derecho si el ancho es 1 y no es el último
    process.stdout.write(charExtremoDerecha);
  } else if (ancho === stop) {
    // Caso base: imprimir el carácter del extremo izquierdo si el ancho es igual al stop
    process.stdout.write(charExtremoIzquierdo);
    // Llamada recursiva para imprimir el resto de la línea
    imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
  } else if (ancho > 0) {
    // Caso general: imprimir el carácter medio y hacer una llamada recursiva con ancho - 1
    process.stdout.write(charMedio);
    imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
  }
};

// Función para imprimir la figura verticalmente
const imprimirVertical = (ancho, alto, stop) => {
  if (alto === stop) {
    // Caso base: imprimir la parte superior de la figura
    imprimirHorizontal(ancho, ancho, '/', '*', '\\');
    process.stdout.write('\n');
    // Llamada recursiva para imprimir el resto de la figura
    imprimirVertical(ancho, alto - 1, stop);
  } else if (alto === 1) {
    // Caso base: imprimir la parte inferior de la figura
    imprimirHorizontal(ancho, ancho, '\\', '*', '/');
    process.stdout.write('\n');
  } else if (alto > 0) {
    // Caso general: imprimir una línea en medio de la figura y hacer una llamada recursiva con alto - 1
    imprimirHorizontal(ancho, ancho, '*', ' ', '*');
    process.stdout.write('\n');
    imprimirVertical(ancho, alto - 1, stop);
  }
};

// Función principal para dibujar la figura 'rush'
const rush = (ancho, alto) => {
  if (ancho > 0 && alto > 0) {
    // Llamar a la función para imprimir la figura verticalmente
    imprimirVertical(ancho, alto, alto);
  }
};

// Solicitar al usuario que ingrese el ancho y el alto de la figura
ancho = prompt("Ingrese el ancho: ");
alto = prompt("Ingrese el alto: ");

// Llamar a la función 'rush' para dibujar la figura con los valores ingresados
rush(ancho, alto);