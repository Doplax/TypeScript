(() => {
  // De esta forma estamos creando un nuevo tipo
  let flash: { name: string; age?: number; powers: string[];  getNombre?: ()=> string ;} = {
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
