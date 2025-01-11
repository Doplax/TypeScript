(() => {
    let avengers: number = 10; 
    console.log(avengers); 

    const villains: number = 20; 

    if (avengers < villains) {
        console.log('Estamos en problemas'); // Esto se imprimirá si avengers es menor que villains
    } else {
        console.log('Nos salvamos'); // Esto se imprimirá si avengers es mayor o igual a villains
    }

    // Convertimos la cadena '55A' a un número
    avengers = Number('55A'); // <-- Aquí, la conversión fallará, asignando NaN (Not a Number)
    console.log(avengers); // <-- Imprime: NaN
})();
