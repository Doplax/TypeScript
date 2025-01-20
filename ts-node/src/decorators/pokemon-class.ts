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

@printToConsoleConditional(false) // Llamamos al decorado
export class Pokemon {

    public publicApi: string = 'https://pokeapi.com';

    constructor(
        public name: string,
    ) {
    }
}