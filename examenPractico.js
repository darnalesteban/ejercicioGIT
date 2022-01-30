//1.- Colocar las condiciones necesarias para que se cumpla la salida en consola. (10 pts)
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
    console.log("numero2 es positivo");
}
if(numero1 === < 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1+ 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//2.- El factorial de un número entero n es una operación matemática que consiste en
// multiplicar todos los factores n x (n-1) x (n-2) x ... x 1 . Así, el factorial de 5
// (escrito como 5! ) es igual a 5! = 5 x 4 x 3 x 2 x 1 = 120
// Utilizando la estructura crear un script que calcule la factorial de un número entero.
// (10 pts)
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}
console.log(factorial(5))

//3.- Escribir el código de una función a la que se pasa como parámetro un número entero
// y devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función. (20 pts)

function validar(num)
{
    if (num % 2===0) {
        alert("El numero es par");
    } else {
        alert("El numero es impar");
    }
}
console.log(validar (11))

//4.- Definir una función determine si la cadena de texto que se le pasa como parámetro
// es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
// derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”. (10
// pts)

function Palindromo(cadena){
    let Array= cadena.split("");
    let reverse= Array.reverse();

    return cadena === reverse.join("") ? "Es palindromo" : "No es Palindromo"
}
console.log(Palindromo("amanapanama"));







//Bonus: Escribe una function que genere todas las posibles combinaciones con las letras de
// dicho string. (La entrada la puede limitar a 3 letras) (15 puntos)

let Combinacion = (pais) =>{
    let combinacion = [];
    for(let i = 0 ;i < pais.length; i++)
    {
        for(let j = i + 1; j < pais.length + 1; j++)
        {
            combinacion.push(pais.slice(i , j));
        }
    }
    return combinacion;
}
console.log(Combinacion('colombia'));