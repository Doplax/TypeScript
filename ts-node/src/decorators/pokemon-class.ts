function printToConsole(constructor: Function){
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if(print){
        return printToConsole; // No estamos invocando la función, sino mandando su referencia
    }else{
        return () => {};
    }
}

//Bloauqador para bloquear el prototipo de una clase
const blockPrototype = function(constructor: Function){
    Object.seal(constructor); //Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
    Object.seal(constructor.prototype);
}

@blockPrototype

@printToConsoleConditional(false) // Llamamos al decorado
export class Pokemon {

    public publicApi: string = 'https://pokeapi.com';

    constructor(
        public name: string,
    ) {
    }
}