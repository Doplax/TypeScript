"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superMan = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getNombre() {
            return this.name;
        },
    };
    console.log(flash, superMan);
})();
