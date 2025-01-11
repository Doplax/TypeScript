"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        // Si no pasamos un parametro, este será undefined, por eso usaremos || para asignar un valor
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('Tony', true);
    console.log({ name });
})();
