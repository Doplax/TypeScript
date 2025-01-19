import { Hero } from "./interfaces/hero";
import { genericFunction } from "./generics/generics";
import { Villain } from "./interfaces/villain";

// Nos está dejando usar metodos de string, numero ,ect cuando no es su tipo de dato
//console.log( genericFunction(3.1416));
//console.log( genericFunction(name).toUpperCase() );
//console.log( genericFunction(new Date()).getDate() );


const deadpol = {
    name: 'Wade',
    realName: 'Deadpool',
    dangerLevel: 130
}

console.log( genericFunction<Villain>(deadpol) );
