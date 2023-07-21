/*
-Fecha de publicación: 20/06/2023
-Hora: 3:15pm
- Versión de su código 3.8
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- memorama
*/



var prompt = require('prompt-sync')();

// Definición de variables iniciales
let parejasOriginal = "&&++@@**";
let ocultaParejas = "12345678";
let parejasAleatorias = "        ";

/**
 * Función para mezclar las parejas de forma aleatoria.
 * @param {number} contador - Contador para rastrear la posición en parejasOriginal.
 * @param {number} final - Valor final para determinar cuándo se han mezclado todas las parejas.
 */
function MezclarParejas(contador, final) {
  let random = Math.floor(Math.random() * 8);

  if (contador < final) {
    if (parejasAleatorias[random] === ' ') {
      parejasAleatorias =
        parejasAleatorias.slice(0, random) +
        parejasOriginal[contador] +
        parejasAleatorias.slice(random + 1);

      MezclarParejas(contador + 1, final);
    } else {
      MezclarParejas(contador, final);
    }
  }
}

// Mezclar las parejas aleatoriamente
MezclarParejas(0, 8);

/**
 * Función para verificar si el número seleccionado es válido.
 * @param {number} numero - Número ingresado por el usuario.
 * @returns {number} - Número válido.
 */
function VerificarNumero(numero) {
  let ocultaParejasAux = "12345678";

  if (typeof numero === 'number') {
    if (numero <= 8) {
      if (ocultaParejas[numero - 1] === ocultaParejasAux[numero - 1]) {
        return numero;
      } else {
        console.log("\nEl número ya fue elegido, por favor ingresa otro número: ");
        return VerificarNumero(Number(prompt()));
      }
    } else {
      console.log("\nEl número ingresado debe estar entre 1 y 8, por favor ingresa otro número: ");
      return VerificarNumero(Number(prompt()));
    }
  } else {
    console.log("\nEl valor ingresado debe ser un número entre 1 y 8, por favor ingresa otro número: ");
    return VerificarNumero(Number(prompt()));
  }
}

/**
 * Función para imprimir los caracteres de las parejas ocultas.
 * @param {number} contador - Contador para rastrear la posición en ocultaParejas.
 * @param {number} final - Valor final para determinar cuándo se han impreso todos los caracteres.
 */
function ImprimirCaracteres(contador, final) {
  if (contador <= final) {
    process.stdout.write(` ${ocultaParejas[contador]} │`);
    ImprimirCaracteres(contador + 1, final);
  }
}

/**
 * Función para imprimir las parejas ocultas.
 * @param {number} contador - Contador para rastrear la posición en ocultaParejas.
 * @param {number} final - Valor final para determinar cuándo se han impreso todas las parejas.
 * @param {number} finalref - Referencia al valor final original.
 */
function ImprimirOcuParejas(contador, final, finalref) {
  if (contador <= final) {
    process.stdout.write("\n┌───┬───┬───┬───┬───┬───┬───┬───┐\n│");
    ImprimirCaracteres(contador, finalref);
    console.log("\n└───┴───┴───┴───┴───┴───┴───┴───┘");
  }
}

/**
 * Función para seguir jugando y mostrar el resultado final.
 * @param {number} parejas - Número de parejas a adivinar.
 */
function SeguirJugando(parejas) {
  console.log("\n\n¿Deseas continuar (s/n)?: ");
  let opcion = prompt();

  if (opcion === 's') {
    if (parejas === 4) {
      console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + parejas);
      ImprimirOcuParejas(0, 7, 7);
      console.log("\nHas logrado adivinar el total de parejas, gracias por jugar");
    } else {
      EmpezarJuego(parejas);
    }
  } else if (opcion === 'n') {
    console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + parejas);
    ImprimirOcuParejas(0, 7, 7);
    console.log("\nGracias por jugar");
  } else {
    SeguirJugando(parejas);
  }
}

/**
 * Función para mostrar una pareja seleccionada por el usuario.
 * @param {number} numero1 - Índice de la primera pareja seleccionada.
 * @param {number} numero2 - Índice de la segunda pareja seleccionada.
 * @param {number} numParejas - Número actual de parejas adivinadas.
 */
function MostrarPareja(numero1, numero2, numParejas) {
  let ocultaParejasAux = "12345678";

  if (ocultaParejas[numero1] === ocultaParejas[numero2]) {
    SeguirJugando(numParejas + 1);
  } else {
    ocultaParejas = ocultaParejas.slice(0, numero1) + ocultaParejasAux[numero1] + ocultaParejas.slice(numero1 + 1);
    ocultaParejas = ocultaParejas.slice(0, numero2) + ocultaParejasAux[numero2] + ocultaParejas.slice(numero2 + 1);
    SeguirJugando(numParejas);
  }
}

/**
 * Función principal para comenzar el juego.
 * @param {number} numeroParejas - Número de parejas a adivinar.
 */
function EmpezarJuego(numeroParejas) {
  console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + numeroParejas);
  ImprimirOcuParejas(0, 7, 7);
  console.log("\nIngresa la primera opción: ");
  let primeranumero = VerificarNumero(Number(prompt())) - 1;
  ocultaParejas = ocultaParejas.slice(0, primeranumero) + parejasAleatorias[primeranumero] + ocultaParejas.slice(primeranumero + 1);
  console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + numeroParejas);
  ImprimirOcuParejas(0, 7, 7);
  console.log("\nIngresa la segunda opción: ");
  let segundanumero = VerificarNumero(Number(prompt())) - 1;
  ocultaParejas = ocultaParejas.slice(0, segundanumero) + parejasAleatorias[segundanumero] + ocultaParejas.slice(segundanumero + 1);
  console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + numeroParejas);
  ImprimirOcuParejas(0, 7, 7);

  if (numeroParejas === 3) {
    console.log("\nJUEGO CONCENTRESE (MEMORAMA)\tNúmero de parejas: " + (numeroParejas + 1));
    ImprimirOcuParejas(0, 7, 7);
    console.log("\nHas logrado adivinar el total de parejas, gracias por jugar");
  } else {
    MostrarPareja(primeranumero, segundanumero, numeroParejas);
  }
}

// Comenzar el juego con 0 parejas adivinadas
EmpezarJuego(0);
