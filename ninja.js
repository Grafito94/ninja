class Ninja{ 
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;

        }

    sayNombre(){
        return this.nombre;
    }

    showStats(){
        let datos = {
            "fuerza" : this.fuerza,
            "salud" : this.salud,
            "velocidad": this.velocidad,
        }
        return datos;
    }

    drinkSake(){
        let n = 1;
        let suma = 0;
        let num;


        while(n < 2){
            num = 10;
            suma = suma + this.salud + 10;
            n = n + 1;
            console.log(suma);
            return suma;
        }
        

    }
    }

let ninja1 = new Ninja("Santiago", 20);

console.log(ninja1.nombre);
console.log(ninja1.showStats());
ninja1.drinkSake();


