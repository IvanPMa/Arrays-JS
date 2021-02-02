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
var numeros = [];
for (var i = 0; i<6; i++){
    numeros.push(parseInt(prompt("Ingresa el numero")));
}
console.log(numeros);
mostrarArray(numeros);
//Ordenar arreglo y mostrarlo
console.log(numeros.sort((a,b)=> a-b));
//Invertir su orden y mostrarlo
console.log(numeros.reverse());
//Mostrar cuantos elementos tiene el array
console.log(numeros.length);

//6. Busqueda de una valor 
var valor = parseInt(prompt("Ingresa un valor: "));
//Mostramos si lo encuentra o no
busqueda(numeros.includes(valor),valor,numeros);




function mostrarArray(elemento){
    document.write("<h1> Impresion de los numeros </h1>");
    elemento.forEach(element => {
        document.write("<strong>"+element+"</strong><br/>");
    });
}

function busqueda(valor,elemento,arr){
    if(valor == true){
        console.log("Valor encontrado");
        console.log(arr.indexOf(elemento));
    }
    else{
        console.log("Valor no encontrado")
    }
}