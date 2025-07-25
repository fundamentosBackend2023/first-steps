//! Impresión en consola
//? punto y coma

console.log('Hola Mundo');

console.group('Mi grupo de impresiones');
console.log('Esta es la primera impresion');
console.log('Esta es la segunda impresion');
console.log('Esta es la tercera impresion');
console.groupEnd();

console.log('impresion aparte');

//! Variables
    //? Convencion de nombres
    //? tipos de datos y tipado dinamico
    //? impresion de variables concatenadas
var a;
console.log(a);
var b = 'Hola mundo';
var c = 4.5;
var g = h = 'hello';
console.log(g, h);
var m = 'value', n = 'other value';
console.log(m, n);
var o, p = 'another value';
console.log(o, p);

a = true;
console.log(a);

console.log(typeof a);

console.log('Esta es una variable ' + b, 'y esta tambien ' + c);
console.log('Esta es una variable', b, 'y esta tambien', c);
console.log(`Esta es una variable ${b} y esta tambien ${c}`);

    //* let
let d = 15.11;
console.log(d);

    //* const
const e = 'This can not change';
console.log(e)
//e = 'this thing has changed';
//console.log(e)

//* Variables string
let myString = 'This is a new string';
myString = myString.toUpperCase(); //returns not affects
console.log(myString);
myString.toLowerCase(); //returns not affects
console.log(myString);

let position = myString.charAt(12);
console.log(position);
let pieceOfString = myString.slice(5, 13);
console.log(pieceOfString);

let myModifiedString = myString.replace('i', 'a');
console.log(myModifiedString);

let myModifiedString2 = myString.replace(/i/g, "a");
console.log(myModifiedString2);

let everyLetter = myString.split(''); //array casy
console.log(everyLetter);


console.log(`Another console print: ${myString.toLocaleLowerCase()} and a portion ${myString.slice(14)}`);
console.log(myString.length);

    //* Variables Number
console.log('--- Numbers ---')
let myInteger = 15
let myFloat = 12.23423423
let sum = myInteger + myFloat;

console.log(sum);
console.log(Math.round(sum));
console.log(Math.floor(5.8));
console.log(6.2124412.toFixed(3));

let pi = '3.1416'
console.log(typeof pi);
let operation = pi + myInteger;
console.log(operation);

operation = myInteger + pi; //coearción
console.log(operation);

operation = myInteger + Number(pi);
console.log(operation);

operation = parseInt(operation);

console.log(typeof operation);
console.log(operation);

console.log(typeof pi);

pi = parseFloat(pi);
console.log(pi);
console.log(typeof pi);

console.log(2 ** 8);
console.log(Math.abs(-56))
console.log(Math.PI);

operation = 15;
operation = operation.toString();
console.log(typeof operation);

let phrase = Number('Hola mundo') //controlar porque no se rompe. eso es bueno y malo.
console.log(phrase)

    //* Variable Booleans
let myBoolean = true;
console.log(Number(myBoolean))

operation = 10 + Number(myBoolean);
console.log(operation);

console.log(Boolean('hola'));

//! Arrays
let myArray = [1, 'word', [2, 3], true, true];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
myArray.push('end'); // inserta elemento al final. Retorna nuevo length
myArray.unshift('start');   // inserta elemento al inicio. Retorna nuevo length
myArray.pop(); // elimina el ultimo elemento y lo retorna
myArray.shift(); // elimina el primer elemento y lo retorna

let index = myArray.indexOf(true); // retorna primer indice con ese contenido o -1 si no hay
console.log(index);
console.log(myArray);

let secondArray = myArray;
secondArray.pop();
console.log(myArray);
//myArray.pop();
console.log(secondArray);

let thirdArray = [...myArray];
// let thirdArray = Array.from(myArray);
//let thirdArray = myArray.slice();
thirdArray.unshift('before start')
console.log(thirdArray);
console.log(myArray);

console.log(myArray.includes('word'));
console.log(!myArray.includes(10))
delete myArray[3];
console.log(myArray);

myArray.splice(3, 2, false);
console.log(myArray);


//! Objects
let obj = {
    patas: 4,
    material: 'madera',
    color: 'cafe',
    15: 'valor2',
};

console.log(obj);
console.log(obj.color);
console.log(obj['material']);
console.log(obj[15]);

obj.precio = 5
obj['peso'] = 200;
console.log(obj);

let attrName = 'comoda';
obj[attrName] = true;
console.log(obj);

let { precio: v1, comoda: v2 } = obj;
console.log(v1, v2);

let obj = {
    patas: 4,
    material: 'madera',
    color: 'cafe',
    15: 'valor2',
};
obj.obj2 = { a: 1, b: 2 }; //computed objects
console.log(obj);
console.log(obj.obj2);
console.log(obj.obj2.a);

delete obj.true;
delete obj['aatributo'];
console.log(obj);

let newObj = obj;
newObj.atributo = 'nuevo valor';
console.log(obj);

let thirdObject = {
    ...obj, //superficial
    name: 'Allison'
};
thirdObject.atributo = 'this is the third new value';
console.log({ obj })
console.log(thirdObject);

thirdObject.obj2.a = 1000;
console.log(obj);

let color = 'red';
let model = '2020';
let fifthObject = { color, model };
console.log(fifthObject);

console.log('model' in fifthObject);

//! Estructuras de Control
let varForConditional1 = 15;
let varForConditional2 = -15;

if(varForConditional1 > 0 && varForConditional2 < 0){
    console.log('ít was true');
}else if(varForConditional1 > 0 || varForConditional2 < 0){
    console.log('just one was true')
}else{
    console.log('nothing was true')
}

if(varForConditional1 === 15){
    console.log('yes')
}else{
    console.log('no')
}

const obj1 = { a: 1 };
const obj2 = obj1;
const obj3 = { ...obj1 };

console.log(obj1 === obj2);
console.log(obj1 === obj3);

let undefinedVar = undefined;

if(!('a' in obj1)){
    console.log('got in');
}else{
    console.log(':(')
}

for(let i = 0; i<5; i++){
    console.log('hola');
}

let myArray2 = ['verde', 'azul', 'morado', 'gris'];

for(let i in myArray2){
    console.log(i);
}

for(let i of myArray2){
    console.log(i);
}

const vehicle = {
    color: 'deep blue',
    model: '2020',
    plate: 'AXN-2031'
}

// for(let i of vehicle){
//     console.log(i)
// }
for(let i of Object.keys(vehicle)){
    console.log(i)
}

for(let i of Object.values(vehicle)){
    console.log(i)
}

for(let [key, value] of Object.entries(vehicle)){
    console.log(key + ': ' + value);
}

let contador = 0

while(contador < 3){
    console.log('inside while');
    contador += 1;
}
contador = 0;
do{
    console.log('inside do while');
    contador += 1;
}while(contador < 3);

let switcher = 'a'

switch(switcher){
    case 'a':
    case 12:
        console.log('the value is accepted');
    break
    case 15:
        console.log('the value is 15');
    break;
    default:
        console.log('i dont know the value')
}

    //! Funciones

function sumNumbers(n1, n2){
    // Código
    return n1 + n2;
}

let firstSum = sumNumbers(10,15)
console.log(firstSum)

//* Retorno de múltiples datos

function operations(n1,n2){
    return {
        sum: n1 + n2,
        substraction: n1 - n2,
        product: n1 * n2
    }
}

let { product: newName } = operations(12, 18) // Destructuring
console.log(newName)

//* Valores por defecto y "el" valor por defecto

const printVehicle = function (vehicle, vehicle2='rocket'){
    console.log('---- New execution ----');
    console.log(vehicle);
    if(vehicle2) console.log(vehicle2); // Comprobación de existencia o Falsy
}

printVehicle('ship','car') // Ejecución normal
printVehicle('Spaceship') // Usando valor por defecto
let vehiclesReturn = printVehicle() // El valor por defaul por default
console.log(vehiclesReturn);
printVehicle('mortorcycle', undefined) // Reacción a undefined

//* Retorno condicional
function isGreater(num){
    const standart = 100 // magic number
    return num > standart
}

console.log(isGreater(150));

const laptop = { price: 15000, brand: 'HP', color: 'silver' }
function isExapnsive(product){
    const standart = 10000
    return product['price'] > standart
}
console.log(isExapnsive(laptop));

const expansiveKeyboard = { price: 1000, switches: 'red', brand: 'msi' }
const genericKeyboard = { price: 200, switches: 'membrane'}
//const genericKeyboard = { price: 200, switches: 'membrane', brand: null}
function keyboardBrand(keyboard){
    let brand = keyboard.brand
    return brand || 'generic';
}
console.log(keyboardBrand(expansiveKeyboard))
console.log(keyboardBrand(genericKeyboard))

// * Funciones anónimas

var myColor =  function(color){
    console.log('My favourite color is ' + color)
}
myColor('Blue');

function printVehicle(vehicle, vehicle2='rocket'){
    console.log(vehicle)
    if(vehicle2) console.log(vehicle2)
}

printVehicle('ship','car') // Ejecución de objeto
printVehicle.subObject = { color: 'green', age: 23 }
console.log(printVehicle.subObject.color)

//* La función como tipo de dato

function saludar(){
    console.log('Hola amigo')
    console.log('Hola amigo otra vez')
}

function conversation(cb, subparam){
    console.log('---- New execution ----')
    console.log('Contacto visual...');
    cb(subparam)
    console.log('adios')
}

conversation(saludar)

conversation(function (hasSpareTime){
    if(hasSpareTime) console.log('¿Cómo has estado?')
    else console.log('Perdón, voy tarde')
    return 15
}, true)

conversation(function (hasSpareTime){
    if(hasSpareTime) console.log('¿Cómo has estado?')
    else console.log('Perdón, voy tarde')
    return 15
}, false)


// * Retornando funciones

function respondInvitation(food){
    if (food === 'pizza' || food === 'tacos'){
        return function respond(food){
            console.log('Sure! I love ' + food)
        }
    }else{
        return function respond(){
            console.log('Thanks but i will be bussy that day')
        }
    }
}

let food = 'tacos'
const firstAnswer = respondInvitation(food) //re-nombrar
firstAnswer(food) // Pasando parámetros externos
food = 'sushi'
const secondAnswer = respondInvitation(food)
secondAnswer();

// * Dinamismo y reasignación de funciones

function sayHi(name){
    console.log('My name is ' + name)
}

sayHi('Eduardo')

const sayHiCorrectly = function(name){
    console.log("Good afternoon y'all, my name is", name)
}

sayHiCorrectly('Alfonso')

// * Arrow functions
const ageVerification = age => {
    const generalLegalAge = 18
    return age >= generalLegalAge
}
console.log(ageVerification(17))

const customAgeVerification = (age, legalAge) => age >= legalAge
console.log(customAgeVerification(23,21));