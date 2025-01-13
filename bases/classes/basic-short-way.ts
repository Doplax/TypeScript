(() => {
  class Avenger {
    //private name;
    //private team;
    //public realName?: string;
    static avgAge: number = 35; // La propiedad estatica la podemos dejar fuera del constructor

    //Directamente en el constructor
    constructor(
      private name: string,
      private team: string,
      avgAge: number = 55,
      public realName?: string,
    ) {}
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  console.log(antman);

  //Para acceder a la propiedad estática se debe acceder a través de la clase directamente
  console.log(Avenger.avgAge);
})();
