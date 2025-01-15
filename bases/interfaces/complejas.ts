(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }


    const client: Client = {
        name: 'Luis',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
    }

  })();
  