"use strict";
(() => {
    let avengers = 10; // Inicializamos la variable con el valor 10
    console.log(avengers); // Imprime: 10
    const villains = 20; // Número de villanos
    // Evaluamos si hay menos vengadores que villanos
    if (avengers < villains) {
        console.log('Estamos en problemas'); // Esto se imprimirá si avengers es menor que villains
    }
    else {
        console.log('Nos salvamos'); // Esto se imprimirá si avengers es mayor o igual a villains
    }
    // Convertimos la cadena '55A' a un número
    avengers = Number('55A'); // <-- Aquí, la conversión fallará, asignando NaN (Not a Number)
    console.log(avengers); // <-- Imprime: NaN
})();
