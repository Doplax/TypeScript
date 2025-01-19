import { genericFunction } from "./generics/generics";


const name: string = 'Doplax';
// Nos está dejando usar metodos de string, numero ,ect cuando no es su tipo de dato
console.log( genericFunction(3.1416));
console.log( genericFunction(name).toUpperCase() );
console.log( genericFunction(new Date()).getDate() );