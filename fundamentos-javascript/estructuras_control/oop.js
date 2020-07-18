class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura    
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if (fn) {
            fn(this.nombre,this.apellido)
        }
    }
    esAlto(){
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`);
        if (fn) {
            fn(this.nombre, this.apellido,true)
        }
    }
}


//var cristian = new Persona('Cristian', 'Rincón', 1.75)


function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log('No sabía que eras desarrrollador.');
        
    }
}

var cristian = new Desarrollador('Cristian', 'Rincón', 1.75)
var romelio = new Persona('romelio', 'ramos', 1.75)
var flipencio = new Persona('flipencio', 'flipas', 1.75)


cristian.saludar(responderSaludo)
romelio.saludar(responderSaludo)
flipencio.saludar(responderSaludo)