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


function CheckValidPokemonId(){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        
        const originalMethod = descriptor.value;
        
        descriptor.value = (id: number) => {
            if( id < 1 || id > 800) {
                return console.error('El id del pokemon debe estar entre 1 y 800')
            } else {
                originalMethod(id);
            }

        } 
    }
}
@blockPrototype
@printToConsoleConditional(false) // Llamamos al decorado
export class Pokemon {

    public publicApi: string = 'https://pokeapi.com';

    constructor(
        public name: string,
    ) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number){
        console.log(`Saving ${this.name} to the DB with id: ${id}`);
    }
}

