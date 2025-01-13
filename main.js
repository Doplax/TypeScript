"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
    //Para acceder a la propiedad estática se debe acceder a través de la clase directamente
    console.log(Avenger.avgAge);
})();
define("app", ["require", "exports", "./classes/basic"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=main.js.map