(() => {

    const hero:string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatissignal = ():string => {
        return 'Batiseñal activada!';
    }
    
    console.log(typeof activateBatissignal);
    const heroName = returnName();
})();
