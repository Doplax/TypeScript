(() => {

    class Avenger {
        private name;
        private team;
        public realName?: string;
        static avgAge: number = 35;

        constructor (name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avenger = new Avenger('Antman','Capitan');
    console.log(antman)

    //Para acceder a la propiedad estática se debe acceder a través de la clase directamente
    console.log(Avenger.avgAge)
})();
  