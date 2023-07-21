/*
Fecha de publicación : 20/06/2023
Hora : 1:30 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe dos numeros y devuelve la suma , resta, multiplicacion y division 
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/
var prompt = require('prompt-sync')();
//esta variables que guardan los datos solicitados
var numero1 = prompt("digite el numero 1 : "), //variable que guarda el primer numero
numero2 = prompt("digite el numero 2 : "); // variable que guarda el segundo numero


function mostrarDatos(n1,n2) {
    //guarda las operaciones
    var suma = parseInt(n1) + parseInt(n2); //variable que guarda el resultado de la suma entre los dos numeros
    var resta = parseInt(n1) - parseInt(n2);//variable que guarda el resultado de la resta entre los dos numeros
    var multiplicacion = parseInt(n1) * parseInt(n2);//variable que guarda el resultado de la multiplicacion entre los dos numeros
    var division = parseInt(n1) / parseInt(n2);//variable que guarda el resultado de la division entre los dos numeros
    
    console.log("suma : ",suma);
    console.log("resta : ",resta);
    console.log("multiplicacion : ",multiplicacion);
    console.log("division : ",division.toFixed(4));
}

mostrarDatos(numero1,numero2);