"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatissignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatissignal);
    const heroName = returnName();
})();
