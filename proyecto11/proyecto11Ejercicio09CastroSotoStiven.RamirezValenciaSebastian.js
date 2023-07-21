/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : imprime unas ternas de enteros 
*/
var prompt = require('prompt-sync')();
let contador = 1; // Variable para llevar el conteo de la secuencia

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    // Cálculo de la tercera posición de la terna utilizando el contador
    let k = (contador - 1) % 3 + 1;
    console.log(contador, i, k); // Imprimir la terna actual
    contador++; // Incrementar el contador para la siguiente terna
  }
}
