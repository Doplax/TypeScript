"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}`); // <-- Imprime: "I'm Batman"
    console.log(batman.toUpperCase()); // <-- Imprime: "BATMAN"
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
