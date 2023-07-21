/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : Cálculo de la función ln(x) utilizando una serie de taylor 
*/
// Importar el módulo 'prompt-sync' para recibir entradas desde el teclado
var prompt = require('prompt-sync')();

// Función para calcular la serie de Taylor de ln(x)
const calcularLn = (x, m) => {
  let termino, suma = 0;

  for (let i = 1; i <= m; i++) {
    // Determinar la base y el exponente según el número de término
    let base = x - 1; // Base de la potencia en la fórmula del término actual
    let exponente = i; // Exponente de la potencia en la fórmula del término actual
    var signo = 1
    // Cambiar el signo de la base si el término es par
   if (i === 1){
    signo = 1;
   }else if (i % 2 === 0) {
      signo *= -1; // Multiplica el signo por -1 para alternar el signo en términos pares
    }

    // Calcular el término utilizando la potencia y la división
    termino = signo * ((base ** exponente) / exponente); // Fórmula de la serie de Taylor
    suma += termino; // Sumar el término actual a la suma total de términos

    // Mostrar el valor de cada término en la consola
    console.log(`Termino ${i}: ${termino}`);
  }

  // Mostrar la suma total de los términos en la consola
  console.log(`Suma total: ${suma}`);
}

// Obtener el valor de x y el número de términos desde el teclado
const x = parseFloat(prompt("Ingresa el valor de x:")); // Valor de x en la serie de Taylor
const m = parseInt(prompt("Ingresa el número de términos (m):")); // Número de términos a calcular

// Calcular la serie de Taylor de ln(x)
calcularLn(x, m);


  
  