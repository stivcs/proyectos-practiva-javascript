/*
-Fecha de publicación: 20/06/2023
-Hora: 9:30am
- Versión de su código 1.0
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
-  Version del lenguaje utilizado : JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa, Este programa, lee un número e imprime si es par o impar..
-Salvedades si las hubiese: N/A
*/

// se implementa la variable promt para importar y guardar la utilizadad de la funcion promt 
var prompt = require('prompt-sync')();
console.log("Este programa, lee un número e imprime si es par o impar..")

// esta varible guarda el numero que el usuario ingrese ademas se utiliza a la hora de utilizar la estructura condicional 
var numeroIngresado = prompt("Entre un número: ");


// evalua si el el numero es par o no teniendo en cuenta el resto de la division del numero ingresado divido 2
if (numeroIngresado % 2 == 0) {
    console.log("El numero es par")
} else {
    console.log("El número no es par")
}
