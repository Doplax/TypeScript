(() => {

    let avenger: any = 123;
    let exist;
    let power;


    avenger = 'Strange'
    console.log((avenger as string).charAt(0)); // Casteo directo

    avenger = 150.234234234;
    console.log( <number>avenger.toFixed(2) ); // Casteo directo

    console.log(exist);
    console.log(power);

})();