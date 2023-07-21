 /*
- Fecha de publicacion: 20 de junio 2023
- Hora 10:00pm
- Version 1
- ing(c) sebastian ramirez / stiven castro soto
- Lenguaje utilizado JavaScript
- Version del lenguaje 6.0 
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Hacer  Programa que lea desde un teclado un 
grupo de 75 numeros: a)cantidad de numeros 
mayores a 150 b)numero mayor y menor c)cantidad 
de numeros negativos d)promedio de los positivos   
*/
// Importar el módulo 'readline' para leer la entrada del usuario
const readline = require('readline');

// Función para contar la cantidad de números mayores a 150 en un arreglo
const may150 = (numeros) => {
  let cant = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 150) {
      cant++;
    }
  }
  return cant; // Retornar la cantidad de números mayores a 150
};

// Función para encontrar el número más grande en un arreglo
const nmayor = (numeros) => {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor; // Retornar el número más grande
};

// Función para encontrar el número más pequeño en un arreglo
const nmenor = (numeros) => {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor; // Retornar el número más pequeño
};

// Función para contar la cantidad de números negativos en un arreglo
const negativos = (numeros) => {
  let cant = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      cant++;
    }
  }
  return cant; // Retornar la cantidad de números negativos
};

// Función para calcular el promedio de los números positivos en un arreglo
const prompost = (numeros) => {
  let suma = 0;
  let cant = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      suma += numeros[i];
      cant++;
    }
  }
  return Math.floor(suma / cant); // Retornar el promedio de los números positivos
};

// Función principal del programa
const main = () => {
  // Crear una interfaz para leer la entrada del usuario
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Este programa recopila un grupo de 75 números e imprime diferentes cálculos.");

  let numeros = []; // Arreglo para almacenar los números ingresados
  let n = 0; // Variable para contar la cantidad de números ingresados

  // Función recursiva para solicitar números al usuario
  const askNumber = () => {
    rl.question("Ingrese un número entero diferente de 0: ", input => {
      const x = parseInt(input);
      if (x === 0) {
        console.log("Error: El número no puede ser cero.");
        askNumber(); // Volver a solicitar un número válido
      } else {
        numeros.push(x); // Agregar el número al arreglo
        n++; // Incrementar el contador de números
        if (n < 75) {
          askNumber(); // Solicitar el siguiente número hasta alcanzar el límite de 75 números
        } else {
          rl.close(); // Cerrar la interfaz de lectura
          console.log("Mayores de 150:", may150(numeros));
          console.log("Número mayor de todos:", nmayor(numeros));
          console.log("Número menor de todos:", nmenor(numeros));
          console.log("Cantidad de números negativos:", negativos(numeros));
          console.log("Promedio números positivos:", prompost(numeros));
        }
      }
    });
  };

  askNumber(); // Llamar a la función recursiva para comenzar la recopilación de números
};

main(); // Llamar a la función principal para iniciar el programa