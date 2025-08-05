let var0 = 0;
let var1 = 0;
let var2 = 0;

function ejercicio1(){
    let result = 0;
    return result
}

function ejercicio2(){
    let result = 0;
    return result    
}

function ejercicio3(){
    let result = 0;
    return result    
}

function ejercicio4(){
    let result = 0;
    return result    
}

function ejercicio5(){
    let result = 0;
    return result    
}


function ejercicio6(){
    let result = 0;
    return result
}

function ejercicio7(){
    let result = 0;
    return result    
}

function ejercicio8(){
    let result = 0;
    return result    
}

function ejercicio9(){
    let result = 0;
    return result;   
}

function ejercicio10(){
    let result = 0;
    return result;   
}

let option = prompt("Ejercicios de Js \nIngrese el numero del ejercicio a ejecutar")

switch (option) {
    case "8":
        const productPapa = {
	        "papa": 200,
	        "huevo": 1,
            "cebolla": 60
        }
        var0 = parseInt(prompt("Engrese la cantidad de papas deseadas para calcular sus ingredientes necesarios\n"));
        console.log(`La cantidad de ingredientes necesarios para las unidades deseadas es:\nPapa:\t\t${productPapa.papa*var0}\nHuevo:\t\t${productPapa.huevo*var0}\nCebolla:\t${productPapa.cebolla*var0}`);
        break;

    case "9":
        var0 = parseInt(prompt("Alternar el valor de 2 variables \nIngrese el valor de VAR0"),0);
        var1 = parseInt(prompt("Ingrese el valor de VAR2"),0);
        console.log(`VAR0 = ${var0}\nVAR1 = ${var1}`);
        var0+=var1;
        var1=var0-var1;
        var0-=var1;
        console.log(`Resultado de operacion ejercicio 9\nVAR0 = ${var0}\nVAR1 = ${var1}`);
        break;
    case "10":
        var0 = parseInt(prompt("Verificador de numeros pares\nIngrese un numero a verificar:"));
        console.log(`El resultado es ${0==var0%2}`);
    default:
        break;
}
/**alert('Hola mundo')

let x=5
console.log(`El numero es ${x}`);
alert(`El numero es ${x}`)**/