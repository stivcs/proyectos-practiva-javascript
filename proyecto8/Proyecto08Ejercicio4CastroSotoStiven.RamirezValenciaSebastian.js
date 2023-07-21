/*
Fecha de publicación : 20/06/2023
Hora : 10:43 
Versión de su código : 1
Autores. Ing(c):Castro Soto Stiven , Ing(c):Ramirez Valencia Sebastian
Nombre del lenguaje utilizado: JavaScript 
Versión del lenguaje utilizado: 6.0v
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
descripcion : el programa recibe Km/h y devuelve mph(millas por hora)
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/
//1Km = 0.621371 millas
var prompt = require('prompt-sync')();
//estas variables se usan para guardar los kilometros por hora 
var kilometrosHora = prompt("digite los Km/h que quiera convertir a mph : ")

function kmAMph(km) {
    //guarda el resultado de la operacion
    var result = km * 0.621371; //variable que guarda las mph 
    console.log(km," Km/h equivale a ",result," mph");
}

kmAMph(kilometrosHora);
