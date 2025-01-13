(() => {

    type Avenger =  {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    //const { poder, vision } = avengers;
    //console.log(poder.toFixed(2), vision.toUpperCase())

    //Desestructuración de los argumentos del objeto avengers
    const printAvenger = ({ ironman, ...resto }: Avenger) => {
        console.log(ironman, resto)
    }

    printAvenger(avengers);

})();
