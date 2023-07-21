/*
Fecha de publicación: 20/06/2023
Hora: 5:24pm
Versión de su código: 1.5
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa pide el número de términos deseados de la serie de Motzkin y los imprime, teniendo en cuenta que:
- Serie de Motzkin: Esta serie cuenta el número de caminos no cruzados de longitud n en una retícula tridimensional. Comienza con los números 1, 1 y los siguientes términos se calculan como la suma de los términos anteriores y la suma de los términos anteriores menos el tercer término anterior.
- Salvedad: Este programa toma como datos de entrada únicamente valores numéricos enteros positivos, de otro modo no se garantizan sus resultados.
*/
var prompt = require('prompt-sync')();
const obtenerNumero = Math.floor(parseInt(prompt("Digite la cantidad de términos deseados:")));

function obtenerSerieMotzkin(n) {
  let resultado;
  
  if (n === 0 || n === 1) {
    return 1;
  } else {
    resultado = (((obtenerSerieMotzkin(n - 1)) * (1 + (n * 2))) + 
      ((obtenerSerieMotzkin(n - 2)) * ((n * 3) - 3))) /
      (n + 2);
  }
  
  return resultado;
}

function imprimirSerie(numMotzkin, contador) {
  if (contador === (obtenerNumero + 1)) {
    return;
  } else {
    if (contador === obtenerNumero) {
      process.stdout.write(numMotzkin.toString());
    } else {
      process.stdout.write(numMotzkin.toString() + ", ");
    }
    imprimirSerie(obtenerSerieMotzkin(contador === obtenerNumero ? obtenerNumero : contador), contador + 1);
  }
}

if (Number.isInteger(obtenerNumero) && obtenerNumero >= 0) {
  imprimirSerie(1, 1);
} else {
  console.log("Por favor introduzca un valor válido.");
}