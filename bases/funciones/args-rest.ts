(() => {

    // Queremos que solo Clark sea obligatorio y el resto de parametros opcionales
    const fullName = (firstName:string, ...restArgs:string[]):string => {
        //return `${firstName} ${restArgs}`
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark','Clark','Clark','Clark','Clark')
    console.log(superman);
})();
