/*
Fecha de publicación : 20/06/2023
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
Descripcion : es un programa que recibe 75 numeros que al final muestra diferentes valores como el numero mayor y menor etc
*/

const readline = require('readline');
/**
 * Lee un grupo de números ingresados por el usuario y realiza diferentes cálculos con ellos.
 */
const leerGrupoNumeros = () => {
  const numeros = []; // Almacena los números ingresados por el usuario
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let contador = 0; // Lleva la cuenta de la cantidad de números ingresados

  /**
   * Lee un número ingresado por el usuario y lo agrega al arreglo de números.
   */
  const leerNumero = () => {
    rl.question(`Ingrese el número #${contador + 1}: `, (numero) => {
      numero = parseFloat(numero);

      if (numero === 0 || isNaN(numero)) {
        console.log("El número debe ser diferente de cero. Inténtelo nuevamente.");
        leerNumero();
      } else {
        numeros.push(numero);
        contador++;

        if (contador < 75) {
          leerNumero();
        } else {
          rl.close();
          procesarNumeros();
        }
      }
    });
  };

  /**
   * Realiza diferentes cálculos con los números ingresados.
   */
  const procesarNumeros = () => {
    let cantidadMayores150 = 0; // Almacena la cantidad de números mayores a 150
    let numeroMayor = -Infinity; // Almacena el número mayor encontrado
    let numeroMenor = Infinity; // Almacena el número menor encontrado
    let cantidadNegativos = 0; // Almacena la cantidad de números negativos encontrados
    let sumaPositivos = 0; // Almacena la suma de los números positivos encontrados
    let cantidadPositivos = 0; // Almacena la cantidad de números positivos encontrados

    for (let i = 0; i < numeros.length; i++) {
      const numero = numeros[i];

      if (numero > 150) {
        cantidadMayores150++;
      }

      if (numero > numeroMayor) {
        numeroMayor = numero;
      }

      if (numero < numeroMenor) {
        numeroMenor = numero;
      }

      if (numero < 0) {
        cantidadNegativos++;
      }

      if (numero > 0) {
        sumaPositivos += numero;
        cantidadPositivos++;
      }
    }

    const promedioPositivos = sumaPositivos / cantidadPositivos;

    // Imprimir los resultados
    console.log("Cantidad de números mayores a 150: " + cantidadMayores150);
    console.log("Número mayor encontrado: " + numeroMayor);
    console.log("Número menor encontrado: " + numeroMenor);
    console.log("Cantidad de números negativos encontrados: " + cantidadNegativos);
    console.log("Promedio de los números positivos encontrados: " + promedioPositivos);
  };

  leerNumero();
};

leerGrupoNumeros();


