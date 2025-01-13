"use strict";
(() => {
    let myCustomVariable = "Pedro";
    console.log(typeof myCustomVariable); // string
    myCustomVariable = 20;
    console.log(typeof myCustomVariable); // number
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable); // Object
    //* No será de tipo Hero ya que en js no existe ese tipo de dato
})();
