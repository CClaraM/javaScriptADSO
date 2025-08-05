let var0 = 0;
let var1 = 0;
let var2 = 0;
let text;

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

let option = prompt("Ejercicios de Js \n\t2. Calculos basicos de geometria de un cuadrado.\n\t3. Uso de prompt.\n\t4. Calcular el numero medio de tres numeros.\n\t5. Estimacion de combustible por kilometros.\n\t6. Formato de segundos a horas-minutos-segundos.\n\t7. Descomponer numero en unidades decenas y centenas.\n\t8. Calcular cantidad de ingredientes.\n\t9. Intercambiar el valor de dos variables.\n\t10.Verificador de numeros pares.\nIngrese el numero del ejercicio a ejecutar")
switch (option) {
    case "1":
        var0 = parseInt(prompt("Se calculara el iva de una compra, ingrese el valor del producto, teniendo presente que el precio es antes de iva\n\tIngrese el valor del producto"));
        var1 = parseFloat(prompt("ingrese el porcentage de iva si simbolos"));
        console.log(`El costo del producto sin iva es ${var0}.\n\tEl iva es de ${var0*(var1/100)}\n\tEl valor total es ${var0*(1+(var1/100))}`);
        break;
    case "2":
        var0=parseFloat(prompt("Se calculara el area de un cuadrado y su perimetro\n\tIngresar el valor de un laso en centimetros"));
        console.log(`\tEl area del cuadrado es ${var0*2}cm y el perimetro es ${var0*4}cm.`);
        break;
    case "3":
        text = prompt('Utilizando la funcion prompt se ingresaran datos, en este caso se trabajaremos con texto.\nLa sintaxis es {variable = prompt("TEXTO DE SALIDA")}\n\tEscribe tu nombre para continuar');
        console.log(`Hola ${text}`);
        break;
    case "4":
        var0 = parseInt(prompt("Ingrese tres valores distintos para calcular el numero medio\n\tIngresa el primer valor"));
        var1 = parseInt(prompt("\tIngresa el siguiente valor"));
        console.log(`El valor medio es ${(parseInt(prompt("\tIngresa el ultimo valor"))+var0+var1)/3}`);
        break;
    case "5":
        var0 = parseFloat(prompt("Se calculara el consumo de combustible, ingrese los siguientes datos\n\tIngrese la distancia recorrida en kilometros"))
        console.log(`Se estima que se consumen ${prompt("\tIngrese el volumen en litros de combustible consumido")/var0} litros/kilometro`);
        break;
    case "6":
        var0 = parseInt(prompt("Ingrese el tiempo en segundos que desea convertir"));
        console.log(`El valor ingresado es ${var0} segundos`);
        if (var0>60) {
            var1=Math.floor(var0 / 60);
            var0=var0%60
            if (var1>60) {
                var2=Math.floor(var1/60);
                var1=var0%60
            }
        }
        console.log(`\tEl tiempo con formato aplicado es ${var2}:${var1}:${var0}`);
        break;
    case "7":
        var0 = parseInt(prompt("Ingrese el numero que desea descomponer"));
        console.log(`Numero ingresado es ${var0}\n decenas:\t${Math.floor(var0 / 10)}\n unidades:\t${var0 % 10}`);
        break;
    case "8":
        const productPapa = {
	        "papa": 200,
	        "huevo": 1,
            "cebolla": 60
        }
        var0 = parseInt(prompt("Engrese la cantidad de papas deseadas para calcular sus ingredientes necesarios\n"));
        console.log(`La cantidad de ingredientes necesarios para las unidades deseadas es:\nPapa:\t\t${productPapa.papa*var0}\nHuevo:\t\t${productPapa.huevo*var0}\nCebolla:\t${productPapa.cebolla*var0}\n`);
        break;

    case "9":
        var0 = parseInt(prompt("Alternar el valor de 2 variables \nIngrese el valor de VAR0"),0);
        var1 = parseInt(prompt("Ingrese el valor de VAR2"),0);
        console.log(`VAR0 = ${var0}\nVAR1 = ${var1}`);
        var0+=var1;
        var1=var0-var1;
        var0-=var1;
        text=`Resultado de operacion ejercicio 9\nVAR0 = ${var0}\nVAR1 = ${var1}`
        console.log(`Resultado de operacion ejercicio 9\nVAR0 = ${var0}\nVAR1 = ${var1}`);
        break;
    case "10":
        var0 = parseInt(prompt("Verificador de numeros pares\nIngrese un numero a verificar:"));
        console.log(`El resultado es ${0==var0%2}`);
        break;
    default:
        break;
}
/**alert('Hola mundo')

let x=5
console.log(`El numero es ${x}`);
alert(`El numero es ${x}`)**/