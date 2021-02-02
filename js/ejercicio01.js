'use strict'
/*
1. Pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5.Mostrar cuantos elementos tiene el array
6. Bsuqueda de una vlor introducido por el usuario, que nos diga si lo encuantra y su indice
*/ 

//1.
function mostrarArray(elemento){
    document.write("<h1> Impresion de los numeros </h1>");
    elemento.forEach(element => {
        document.write("<strong>"+element+"</strong><br/>");
    });
}

var numeros = [];
for (var i = 0; i<6; i++){
    numeros.push(parseInt(prompt("Ingresa el numero")));
}
console.log(numeros);
mostrarArray(numeros);