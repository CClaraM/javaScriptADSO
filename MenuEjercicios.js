const prompt = require("prompt-sync");
let var0 = 0;
let var1 = 0;
let var2 = 0;
let menu = true;

function ejercicio1(){
    prompt("Ingresa el numero que crees que es");
    return;
}

function ejercicio2(){
    
    return;    
}

/*function ejercicio3(){
    let result = 0;
    return;
}*/

while (menu) {
    let option = prompt("Menu de Ejercicios Js \n\t1. Area de ub circulo.\n\t2. Adivinar un numero.\n\t3.Salir\nIngrese la opcion.")
    switch (option) {
        case "1":
            ejercicio1();
            break;
        case "2":
            console.log("Se genero un numero al azar del 0 al 100, intenta adivinar que numero es");
            ejercicio2();
            break;
        case "3":
            menu=false;
            break;
        default:
            console.log=("Ingrese una opcion valida.");
            break;
    }
    /**console.log("dedede");*/
}