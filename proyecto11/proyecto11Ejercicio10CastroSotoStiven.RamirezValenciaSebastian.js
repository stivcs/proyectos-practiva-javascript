/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : mostrar como dos caracteres se van acercando entre ellos 
*/
var prompt = require('prompt-sync')();
let imprimirA = (Inicio, Final) => {
  for (let i = Inicio; i <= Final; i++) {
    process.stdout.write("A");
  }
}

let imprimirEspacios = (Inicio, Final) => {//se encarga de imprimir los espacios que separan a las dos letras
  for (let i = Inicio; i <= Final; i++) {
    process.stdout.write(" ");
  }
}

let aplicarDesplazamiento = () => {
  let contador1 = 0;
  let contador2 = 16;

  // Intervalo para actualizar el movimiento de las letras
  let interval = setInterval(() => {
    console.clear();
    imprimirEspacios(1, contador1);
    imprimirA(1, 1);
    imprimirEspacios(contador1 + 2, contador2 - 2);
    imprimirA(1, 1);
    imprimirEspacios(contador2 + 2, 78);
    console.log();
    contador1++;
    contador2--;

    // Detener el movimiento cuando ambas letras se choquen
    if (contador1 >= contador2) {
      clearInterval(interval);
    }
  }, 1000);
}

aplicarDesplazamiento();
