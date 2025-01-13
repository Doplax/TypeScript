"use strict";
//import './funciones/args-rest'
(() => {
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        // Si no pasamos un parametro, este será undefined, por eso usaremos || para asignar un valor
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('Tony', 'stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        // Si no pasamos un parametro, este será undefined, por eso usaremos || para asignar un valor
        return `${firstName} ${lastName || 'No lastname'}`;
    };
    const name = fullName('Tony', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', true);
    console.log({ name });
})();
(() => {
    // Queremos que solo Clark sea obligatorio y el resto de parametros opcionales
    const fullName = (firstName, ...restArgs) => {
        //return `${firstName} ${restArgs}`
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Clark', 'Clark', 'Clark', 'Clark');
    console.log(superman);
})();
(() => {
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = [
        "Flash",
        "Arrow",
        "Superman",
        "Linterna Verde",
    ];
    contar(superHeroes);
    //Parametros por defecto
    const llamarBatman = (llamar = false) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    // Rest?
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    // Tipo funcion
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    let noHaceNadaTampoco;
    //  let noHaceNadaTampoco: (...params:any) => void;
    noHaceNadaTampoco = noHaceNada;
})();
(() => {
    const addNumer = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //let myFunction: (x: number, y: number) => number; //Parausarla con addNumber
    //let myFunction: (name: strung) => string; //Parausarla con greet
    //let myFunction: () => string; //Parausarla con Save The World (tambien podriamos usar void)
    let myFunction;
    myFunction = addNumer; // Le estamos asignando la referencia de la función
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Doplax'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatissignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatissignal);
    const heroName = returnName();
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            // El metodo disparar es opcional
            console.log("Disparando");
        },
    };
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    // De esta forma estamos creando un nuevo tipo
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    flash = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super fuerza"],
        getNombre() {
            return this.name;
        },
    };
    console.log(flash);
})();
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
(() => {
    let myCustomVariable = "Pedro";
    console.log(typeof myCustomVariable); // string
    myCustomVariable = 20;
    console.log(typeof myCustomVariable); // number
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable); // Object
    //* No será de tipo Hero ya que en js no existe ese tipo de dato
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Strange';
    console.log(avenger.charAt(0)); // Casteo directo
    avenger = 150.234234234;
    console.log(avenger.toFixed(2)); // Casteo directo
    console.log(exist);
    console.log(power);
})();
(() => {
    const number = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log();
})();
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let PowerLevel;
    (function (PowerLevel) {
        PowerLevel[PowerLevel["nothing"] = 0] = "nothing";
        PowerLevel[PowerLevel["starter"] = 1] = "starter";
        PowerLevel[PowerLevel["medium"] = 5] = "medium";
        PowerLevel[PowerLevel["maximum"] = 100] = "maximum";
    })(PowerLevel || (PowerLevel = {}));
    //Enumeraciones
    const fuerzaFlash = PowerLevel.medium;
    const fuerzaSuperman = PowerLevel.maximum;
    const fuerzaBatman = PowerLevel.starter;
    const fuerzaAcuaman = PowerLevel.nothing;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Casteo de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('Estamos en problemas'); // Esto se imprimirá si avengers es menor que villains
    }
    else {
        console.log('Nos salvamos'); // Esto se imprimirá si avengers es mayor o igual a villains
    }
    // Convertimos la cadena '55A' a un número
    avengers = Number('55A'); // <-- Aquí, la conversión fallará, asignando NaN (Not a Number)
    console.log(avengers); // <-- Imprime: NaN
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna Verde';
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}`); // <-- Imprime: "I'm Batman"
    console.log(batman.toUpperCase()); // <-- Imprime: "BATMAN"
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
/*
    Tuples allow us to control the data type of each item separately.
*/
(() => {
    const hero = ['Dr Strange', 100, true];
    //hero[0] = 1;
    hero[0] = 'Iron Man';
    hero[1] = 50;
    hero[2] = false;
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map