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
descripcion : el programa recibe un largo y ancho de un rectangulo y nos da su perimetro
Salvedades : el programa solo acepta valores de tipo numerico, para cualquier valor fuera de este tipo no garantizamos resultados
*/

var prompt = require('prompt-sync')();
//estas variables se usan para guardar el ancho y el largo de un rectangulo
var anchoRectangulo = prompt(" digite el ancho del rectangulo : "),
largoRectangulo = prompt("digite el largo del rectangulo : ");

function perimetroRectangulo(a,l) {
    //guarda el resultado de la operacion qu een este caso es el perimetro de un rectangulo
    var result = (a * 2) + (l * 2); //variable que guarda el valor del perimetro
    console.log("el perimetro de un rectangulo de largo ",l," y ancho ",a," es de : ",result);
}

perimetroRectangulo(anchoRectangulo,largoRectangulo);
