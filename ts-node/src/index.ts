import { genericFunction } from "./generics/generics";

// Nos está dejando usar metodos de string, numero ,ect cuando no es su tipo de dato
console.log( genericFunction(3.1416).toFixed(2) );
console.log( genericFunction('Hello World').toUpperCase() );
console.log( genericFunction(new Date()).getDate() );