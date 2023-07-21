/*
-Fecha de publicación: 20/06/2023
-Hora: 9:15am
- Versión de su código 1.1
-Autores. Ing(c): Sebastian Ramirez Valencia / Stiven Castro Soto 
- JavaScript
- Versión del lenguaje utilizado: “ECMASCRIPT 6.0” ( javascript 6.0 )
- Presentado a: Doctor Ricardo Moreno Laverde
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Este programa, lee un número entre uno(1) y cinco(5), e imprime si es primo o no.
-Salvedades si las hubiese: este programa solo sirve para valores entre 1 y 5 si se ingresan valores fuera de este rango no se garantizan los resultados
*/

console.log("Este programa, lee un número entre uno(1) y cinco(5), e imprime si es primo o no.")
// se implementa la variable promt para importar y guardar la utilizadad de la funcion promt 
var prompt = require('prompt-sync')();

// esta varible guarda el numero que el usuario ingrese ademas se utiliza a la hora de utilizar la estructura condicional 
var numeroIngresado = prompt("Entre un número: ");

// evalua si es el numero que ingresa el usuario es primo o no, si es falso quiere decir que el numero no es primo

if (numeroIngresado == 2 || numeroIngresado == 3 || numeroIngresado == 5) {
    console.log("El numero es primo")
}else if (numeroIngresado == 1 || numeroIngresado == 4){
    console.log("El numero no es primo ")
}

    


