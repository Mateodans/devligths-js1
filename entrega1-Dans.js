//ejercicio 1
//Comenta tu codigo de javascript
// esto es un comentario
/*esto es un comentario multilinea*/

//ejercicio 2
//Declara variables de JavaScript
var myName;

//ejercicio 3
//Almacenar valores con el operador de asignación
a = 7;

//ejercicio 4
//Asigna el valor de una variable a otra variable
// Configuración
var a;
a = 7;
var b;

// Cambia solo el código debajo de esta línea
b = a

//ejercicio 5
//Inicializa variables con el operador de asignación
var a = 9

//ejercicio 6
//Declara variables de cadena
var myFirstName = "Mateo"
var myLastName = "Dans"

//ejercicio 7
//Comprendiendo las variables no inicializadas
// Only change code below this line
var a = 5
var b = 10
var c = "I am a"
    // Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//ejercicio 8
//Comprendiendo la sensibilidad de mayúsculas en las variables
// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// ejercicio 9
//Explora las diferencias entre las palabras claves var y let
let catName = "Oliver";
let catSound = "Meow!";

// ejercicio 10
//Declara una variable de solo lectura con la palabra clave const
const FCC = "freeCodeCamp"; // Cambia esta línea
let fact = "is cool!"; // Cambia esta línea
fact = "is awesome!";
console.log(FCC, fact); // Cambia esta línea

//ejercicio 11
//Suma dos números con JavaScript
const sum = 10 + 10;

//ejercicio 12
//Resta un número de otro con JavaScript
const difference = 45 - 33;

//ejercicio 13
//Multiplica dos números con JavaScript
const product = 8 * 10;

//ejercicio 14
// Divide un numero entre otro con Javascript
const quotient = 66 / 33;

//ejercicio 15
//Incrementa un número con JavaScript
function ej15() {
    let myVar = 87;
}
// Cambia solo el código debajo de esta línea
myVar++;

//ejercicio 16
//Decrementa un número con JavaScript
let myVar = 11;

// Cambia solo el código debajo de esta línea
myVar--;

//ejercicio 17
//Crea números decimales con JavaScript
const ourDecimal = 5.7;

// Cambia solo el código debajo de esta línea

let myDecimal = 5.7

//ejercicio 18
//Multiplica dos números decimales con JavaScript
function ej18() {
    const product = 2.0 * 2.5;
}

//ejercicio 19
//Divide un decimal entre otro con JavaScript
function ej19() {
    const quotient = 4.4 / 2.0; // Cambia esta línea
}

//ejercicio 20
//Encuentra un resto en JavaScript
const remainder = 11 % 3;

//ejercicio 21
//Asignación compuesta con adición aumentada
let a = 3;
let b = 17;
let c = 12;

// Cambia solo el código debajo de esta línea
a += 12;
b += 9;
c += 7;

//ejercicio 22
//Asignación compuesta con resta aumentada
let a = 11;
let b = 9;
let c = 3;

// Cambia solo el código debajo de esta línea
a -= 6;
b -= 15;
c -= 1;

//ejercicio 23
//Asignación compuesta con multiplicación aumentada
let a = 5;
let b = 12;
let c = 4.6;

// Cambia solo el código debajo de esta línea
a *= 5;
b *= 3;
c *= 10;

//ejercicio 24
//Asignación compuesta con división aumentada
let a = 48;
let b = 108;
let c = 33;

// Cambia solo el código debajo de esta línea
a /= 12;
b /= 4;
c /= 11;

//ejercicio 25
//Escapa comillas literales en cadenas
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

//ejercicio 26
//Cita cadenas con comillas simples
function ej26() {
    let myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
}

//ejercicio 27
//Escapa secuencias en cadenas
function ej27() {
    let myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
}

//ejercicio 28
//Concatena cadenas con el operador "más"
function ej28() {
    const myStr = "This is the start." + " This is the end.";
}

//ejercicio 29
//Concatena cadenas con el operador "más igual"
function ej29() {
    let myStr = "This is the first sentence.";
    myStr += "This is the second sentence."
}

//ejercicio 30
//Construye cadenas con variables
// Cambia solo el código debajo de esta línea
function ej30() {
    const myName = "Dans Mateo";
    const myStr = "My name is " + myName + "and I am well!";
}

//ejercicio 31
//Agrega variables a cadenas
// Cambia el código debajo de esta línea
function ej31(params) {
    const someAdjective = "bla";
    let myStr = "Learning to code is ";
    myStr += someAdjective
}

//ejercicio 32
//Encuentra la longitud de una cadena
// Configuración
let lastNameLength = 0;
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
lastNameLength = lastName.length;

//ejercicio 33
// utiliza la notacion de corchetes para encontrar el primer caracter en una cadena
function ej33() {
    // Configuración
    let firstLetterOfLastName = "";
    const lastName = "Lovelace";

    // Cambia solo el código debajo de esta línea
    firstLetterOfLastName = lastName[0]; // Cambia esta línea
}

//ejercicio 34
//Comprende la inmutabilidad de las cadenas
function ej34() {
    // Configuración
    let myStr = "Jello World";

    // Cambia solo el código debajo de esta línea
    myStr = "Hello World"; // Cambia esta línea
    // Cambia solo el código encima de esta línea
}

//ejercicio 35
//Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena
function ej35() {
    // Configuración
    const lastName = "Lovelace";

    // Cambia solo el código debajo de esta línea
    const thirdLetterOfLastName = lastName[2]; // Cambia esta línea
}

//ejercicio 36
//Utiliza la notación de corchetes para encontrar el último carácter en una cadena
function ej36() {
    // Configuración
    const lastName = "Lovelace";

    // Cambia solo el código debajo de esta línea
    const lastLetterOfLastName = lastName[lastName.length - 1]; // Cambia esta línea
}

//ejercicio 37
//Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena
function ej37() {
    // Configuración
    const lastName = "Lovelace";

    // Cambia solo el código debajo de esta línea
    const lastLetterOfLastName = lastName[lastName.length - 2]; // Cambia esta línea
}

//ejercicio 38
//Palabra en blanco
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;

//ejercicio 39
//Almacena múltiples valores en una variable utilizando los arreglos de JavaScript
const myArray = ["Mateo", 11];

//ejercicio 40
//Anida un arreglo dentro de otro arreglo
// Cambia solo el código debajo de esta línea
const miArray = [
    [],
    []
];