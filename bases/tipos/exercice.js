"use strict";
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
