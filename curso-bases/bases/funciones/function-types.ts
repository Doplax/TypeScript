(() => {

    const addNumer = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;


    //let myFunction: (x: number, y: number) => number; //Parausarla con addNumber
    //let myFunction: (name: strung) => string; //Parausarla con greet
    //let myFunction: () => string; //Parausarla con Save The World (tambien podriamos usar void)
    let myFunction: any;

    myFunction = addNumer; // Le estamos asignando la referencia de la función
    console.log(myFunction(1, 2));

    myFunction = greet;
    console.log(myFunction('Doplax'));

    myFunction = saveTheWorld;  
    console.log(myFunction());    


})();
