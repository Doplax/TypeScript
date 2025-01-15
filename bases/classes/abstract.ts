(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }

    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto: Villian = new Villian('Magneto', 'Magnus');


    const printName = (character: Xmen) => {
        console.log(character.realName);
    }

    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

    printName(wolverine);
  })();
  