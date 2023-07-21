/*
Fecha de publicación : 20/06/2023
Hora : 11:20 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe nombre apellido y año de nacimiento y luego los muestra juntos 
Salvedades : el programa solo acepta valores de tipo string, para cualquier valor fuera de este tipo no garantizamos resultados
*/
var prompt = require('prompt-sync')();
//esta variables que guardan los datos solicitados
var nombre = prompt("digite el nombre : "), //variable que guarda un nombre
apellido = prompt("digite el apellido : "), //variable que guarda un apellido
añoDeNacimiento = prompt("digite el año de nacimiento : "); //variable que guarda un año de nacimiento

function mostrarDatos(nombre,apellido,año) {
    //guarda el string concatenado
    var datos = nombre + " " + apellido + " " + año; //variable donde se concatenan los tres elementos
    console.log(datos);
}

mostrarDatos(nombre,apellido,añoDeNacimiento);
