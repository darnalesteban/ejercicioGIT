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
    if (n === 0) {
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

// ejercicio #5

class persona {
    nombre;
    edad;
    obtDetalles() {
        console.log(this);
    }
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class estudiante extends persona {
    constructor(nombre, edad, calificacion) {
        super(nombre, edad, calificacion);
        this.calificacion = calificacion;
    }
    obtDetalles(){
        console.log(this);
    }
}
class profesor extends persona {
    constructor(nombre, edad, asignatura = "js", nivel = "Basico") {
        super(nombre, edad, asignatura, nivel);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    obtDetalles(){
        console.log(this);
    }
}
class grupo  {
    promedio;
    constructor(profesor, estudiantes = []) {
        //super(nombre, edad, promedio, estudiantes)
        this.profesor = profesor;
        this.estudiantes = estudiantes;
    }
    calificar (){
        for(let i = 0 ;i < this.estudiantes.length; i++){
            this.estudiantes[i].calificacion = Math.random() * 10
        }
        //console.log(this.estudiantes);
    }
    calcularPromedio(){
        let suma = 0;
        for(let i = 0 ;i < this.estudiantes.length; i++){
            suma =  this.estudiantes[i].calificacion + suma
        }
        this.promedio = suma / this.estudiantes.length
        //console.log(this.promedio);
    }
    obtDetalles(){
        console.log(this);
    }
}
const estudiante1 = new estudiante("alejandro", 20, 3);
const estudiante2 = new estudiante("santiago", 19, 4);
const estudiante3 = new estudiante("yulian", 22, 5);
const estudiante4 = new estudiante("dina", 25, 3);
const estudiante5 = new estudiante("yeni", 22, 4);
const estudiante6 = new estudiante("bruno", 19, 5);
const estudiante7 = new estudiante("sammy", 18, 2);


let arrayEstudiantes = [estudiante1 , estudiante2 , estudiante3, estudiante4, estudiante5, estudiante6, estudiante7];

const profesor1 = new profesor("pepe", "24");

const grupo1 = new grupo(profesor1, arrayEstudiantes);
grupo1.calificar();
grupo1.calcularPromedio();
grupo1.obtDetalles();

//Bonus: Escribe una function que genere todas las posibles combinaciones con las letras de
// dicho string. (La entrada la puede limitar a 3 letras) (15 puntos)

let Combinacion = (expresion) =>{
    let combinacion = [];
    for(let i = 0 ;i < expresion.length; i++)
    {
        for(let j = i + 1; j < expresion.length + 1; j++)
        {
            combinacion.push(expresion.slice(i , j));
        }
    }
    return combinacion;
}
console.log(Combinacion('colombia'));