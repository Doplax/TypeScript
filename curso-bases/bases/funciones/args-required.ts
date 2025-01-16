(() => {
    const fullName = (firstName:string, lastName:(string|boolean)): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Tony', true);
    console.log({name});
})();
