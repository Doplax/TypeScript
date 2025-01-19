import powers  from "../data/powers";
export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
    public planet: string
  ) {}

  get power(): string {
    return powers.find( power => power.id === this.powerId)?.desc || 'Not Found';
  }
}


export class Hero2 {}
export class Hero3 {}
export class Hero4 {}
export class Hero5 {}
 
export const PI = 3.1314