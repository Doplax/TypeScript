import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('Charmander');

//Pokemon.prototype.customName = 'Pickachu'
(Pokemon.prototype as any).customName = 'Pickachu'// Para evitar problemas de tipado


console.log(charmander);

