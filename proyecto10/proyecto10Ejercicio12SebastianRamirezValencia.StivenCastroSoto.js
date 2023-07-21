/*
Fecha de publicación: 20/06/2023
Hora: 3:46pm
Versión de su código: 1.1
Autores: Ing(c) Sebastian Ramirez Valencia / Stiven Castro Soto
JavaScript
Versión del lenguaje utilizado: "ECMASCRIPT 6.0" (JavaScript 6.0)
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Este programa pide al usuario ingresar un número entero y muestra el número al revés, teniendo en cuenta que:
- El número al revés se obtiene invirtiendo el orden de los dígitos del número original.
- Salvedad: Este programa toma como dato de entrada únicamente un número entero, de otro modo no se garantizan sus resultados.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un número entero: ', function(n) {
  const reversed = reverseNumber(parseInt(n, 10));
  console.log('El número al revés es:', reversed);
  rl.close();
});

function reverseNumber(n) {
  if (n < 10) {
    return n;
  } else {
    const lastDigit = n % 10;
    const remainingNumber = Math.floor(n / 10);
    const reversedRemaining = reverseNumber(remainingNumber);
    return parseInt(lastDigit.toString() + reversedRemaining.toString(), 10);
  }
}
