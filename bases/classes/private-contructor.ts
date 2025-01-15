(() => {

    class Apocalipsis {

        static intance: Apocalipsis;

        private constructor(public name: string) { } 

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }

            return Apocalipsis.intance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }


    // Todas són la misma instancia
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');

})();
  