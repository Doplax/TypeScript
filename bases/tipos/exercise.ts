(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes: [string,string] = [batman,superman];
    const villano : [string,number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  

    enum PowerLevel {
        nothing = 0,
        starter = 1,
        medium = 5,
        maximum = 100
    }

    //Enumeraciones
    const fuerzaFlash = PowerLevel.medium;
    const fuerzaSuperman = PowerLevel.maximum;
    const fuerzaBatman = PowerLevel.starter;
    const fuerzaAcuaman = PowerLevel.nothing;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Casteo de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  