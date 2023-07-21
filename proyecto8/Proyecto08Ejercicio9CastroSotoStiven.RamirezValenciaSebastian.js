/*
Fecha de publicación : 20/06/2023
Hora : 1:40 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe dos angulos internos de un triangulo y devuelve el tercero angulo
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/
var prompt = require('prompt-sync')();
//esta variables que guardan los datos solicitados
var angulo1 = prompt("digite el angulo 1 : "), //variable del primer angulo
angulo2 = prompt("digite el angulo 2 : "); //variable del segundo triangulo


function tercerAngulo(n1,n2) {
    //guarda las operaciones
    var angulo = 180 - parseInt(n1) - parseInt(n2); //variable que guarda el valor del angulo restante del triangulo
    console.log("el valor del tercer angulo con angulos de ",n1," y ",n2," es de : ",angulo);
}

tercerAngulo(angulo1,angulo2);