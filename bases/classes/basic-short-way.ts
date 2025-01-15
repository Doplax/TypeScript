import { isBinaryOperatorToken } from "typescript";

(() => {
  class Avenger {
    //private name;
    //private team;
    //public realName?: string;
    static avgAge: number = 35; // La propiedad estatica la podemos dejar fuera del constructor
    static getAvgAge() {
      return this.name + " " + this.avgAge;
    }

    //Directamente en el constructor
    constructor(
      private name: string,
      private team: string,
      //avgAge: number = 55,
      public realName?: string,
    ) {}

    bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  console.log(antman);

  //Para acceder a la propiedad estática se debe acceder a través de la clase directamente
  console.log(Avenger.avgAge);
})();
