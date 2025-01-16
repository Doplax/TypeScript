(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(`I'm ${batman}`); // <-- Imprime: "I'm Batman"
    console.log(batman.toUpperCase()); // <-- Imprime: "BATMAN"

    console.log(batman[10]?.toUpperCase() || 'No está presente'); 
})();
