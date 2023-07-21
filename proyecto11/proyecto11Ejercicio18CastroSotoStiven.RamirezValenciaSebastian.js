/*
Fecha de publicación: 20/06/2023
Hora: 2:57pm 
Versión de su código: 1.4
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa forma una representación de la letra 'Z' en forma de pirámide.
*/

/**
 * Genera una cadena de espacios en blanco a la izquierda.
 * @param {number} contador - Valor del contador actual.
 * @param {number} cantidadEI - Cantidad de espacios iniciales.
 */
function espaciosI(contador, cantidadEI) {
  for (; contador < cantidadEI; contador++) {
    process.stdout.write(" ");
  }
}

/**
 * Genera una cadena de espacios en blanco al centro.
 * @param {number} contador - Valor del contador actual.
 * @param {number} cantidadEC - Cantidad de espacios centrales.
 */
function espaciosC(contador, cantidadEC) {
  for (; contador < cantidadEC; contador++) {
    process.stdout.write(" ");
  }
}

/**
 * Genera una representación de la letra 'Z' en forma de pirámide.
 * @param {number} limite - Número de líneas de la pirámide.
 */
function renglones(limite) {
  let contador = 0;
  let cantidadEI = 9;
  let cantidadEC = 0;
  
  for (let renglon = 0; renglon < limite; renglon++) {
    if (renglon === 0) {
      espaciosI(0, 9);
    } else if (renglon < 9) {
      espaciosI(contador, cantidadEI);
    }

    if (renglon > 0) {
      process.stdout.write("Z");
    }

    espaciosC(contador, cantidadEC);

    console.log("Z");
    
    if (renglon > 0) {
      cantidadEI--;
      cantidadEC += 2;
    } else {
      cantidadEI--;
      cantidadEC = 1;
    }
  }
}

renglones(10);
