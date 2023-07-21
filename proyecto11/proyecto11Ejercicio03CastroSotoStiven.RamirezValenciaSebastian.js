/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : Solicita al usuario que ingrese un número entero y muestra el número invertido.
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Solicita al usuario que ingrese un número entero y muestra el número invertido.
 */
rl.question('Ingrese un número entero: ', (numero) => {
  const numeroReverso = reverseNumero(numero);
  console.log('El número al revés es:', numeroReverso);
  rl.close();
});

/**
 * Invierte un número dado.
 * @param {string} numero - El número a invertir.
 * @returns {string} - El número invertido.
 */
const reverseNumero = (numero) => {
  let numeroReverso = '';
  for (let i = numero.length - 1; i >= 0; i--) {
    numeroReverso += numero.charAt(i);
  }
  return numeroReverso;
};

