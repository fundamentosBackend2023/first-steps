// * CALLBACKS

const familyMovies = {
    list: ['Avengers', 'Inside-out', 'Lilo & Stitch'],
    category: 'family'
}

const matureMovies = {
    list: ['Fast & Furious', 'Transformers', 'Halloween'],
    category: 'mature'
}

const showMoviesList = (movies, callback) => {
    console.log('Showing movies catalog');
    callback();
    console.log(movies.list);
}

const retrievedMovies = familyMovies
//const retrievedMovies = matureMovies // Simulated query

if (retrievedMovies.category === 'family'){
    showMoviesList(retrievedMovies, () => console.log('Enjoy your time together!'));
}else{
    const showWarningMessage = () =>
        console.log('Please note that the following films may deal with sensible topics')
    showMoviesList(retrievedMovies, showWarningMessage);
}

console.log('------------------')
const simpleMessage = () => console.log('Enjoy!')
showMoviesList(retrievedMovies, simpleMessage()) // Pasando ejecución

//* Closure

const thinkAboutBuying = list => {
    console.log('Remembered shopping list: ',list)
    return (forgottenArticle) =>
        console.log('Do not forget to buy', list[0], list[1], 'and',forgottenArticle)
}

const askToBuy = thinkAboutBuying(['Soda', 'Ice cubes']);
askToBuy('Chips');

// * IIFE

(function(thing){
    console.log('Ready to go...');
    console.log('The thing you gave me was:', thing);
    console.log('Bye!');
})('green hoodie');

((cb) => {
    console.log('Ready to go...');
    cb();
    console.log('Bye!');
})(() =>  console.log('Welcome to your first IIFE') );




    //! Programación Orientada a Objetos

// * Prototipos
function MyPrototype(attr1, attr2){
    this.attr1 = attr1;
    this.attr2 = attr2;
    this.attr3 = 15;
}

MyPrototype.prototype.saludar = function (name){ console.log(`hello ${name.toUpperCase()}`) };

const myPrototypeInstance = Object.create(MyPrototype.prototype);
myPrototypeInstance.attr2 = 20;
console.log(myPrototypeInstance.attr2)
myPrototypeInstance.saludar('Allison');

const secondInstance = new MyPrototype(100, 200);
console.log(secondInstance.attr2)
secondInstance.saludar('Lissa');

//? I Abstracción
    //? Rep. de objetos
    //? Capas de abstracción de funcionalidad / SRP

// * Conceptos generales de clases

class Animal {
    // Constructores
    constructor(type, environment='earth'){ // Valores por default de parámetros
        this.type = type; // Uso del this
        this.environment = environment
        //this.born() // Ejecución inmediata de función
    }

    // Métodos de instancia
    breathe(){
        console.log('breathing...');
    }

    born(){
        console.log('new animal created')
    }

}

const ruperto = new Animal('rhyno'); // Creación de instancia
console.log('My new animal is a:', ruperto.type)
console.log('Look at this new trick it learnt...')
ruperto.breathe()

//* Estáticos
class Animal {
    static entityKind = 'biological'

    constructor(type, environment='earth'){
        this.type = type;
        this.environment = environment
        this.born()
    }

    breathe(){
        console.log('breathing...');
    }

    born(){
        console.log('new animal created')
    }

    static exist(){
        //this.breath() // De instancia dentro de estáticos
        // Estáticos dentro de estáticos
        console.log('The animal is existing as a', Animal.entityKind, 'being')
    }

    live(){
        // Estáticos dentro de instancias
        Animal.exist()
        console.log('Living a normal and chill', this.type, 'life on', this.environment)
    }

}

const max = new Animal('dinosaur');
console.log(max.entityKind)
console.log(Animal.entityKind)
max.exist()
Animal.exist()
max.live()


//* II. Encapsulamiento
class Animal {

    // Atributos privados
    // Lugares de inicialización y declaración
    #name
    #owner = 'anyone'

    constructor(type, name, environment='earth'){
        this.type = type;
        this.environment = environment
        this.born()
        this.#name = name // Hacer referencia a ellos
    }

    breathe(){
        console.log('breathing...');
    }

    born(){
        console.log('new animal created')
    }

    // Método privado
    #talk(){
        console.log('¡Im talkiiiiing!')
    }

    think(){
        // Invocando método privado
        this.#talk
        console.log(this.#name, 'is going to talk...')
        console.log('* Animal noises *')
    }

    get ownership(){
        // Code
        return this.#owner;
    }

    set changeOwner(owner){
        this.#owner = owner;
    }
}

const roy = new Animal('horse', 'Roy')
console.log(roy.name)
//console.log(roy.#owner)
//roy.talk()
//roy.#talk()
// Getters y setters usados como atributos
console.log(roy.ownership)
roy.changeOwner = 'Army'
console.log(roy.ownership)

roy.owner = 'Goverment';
console.log(roy.ownership);
console.log(roy);


//* III. Herencia

class Animal {
    constructor(type, name, environment='earth'){
        this.type = type;
        this.environment = environment
    }

    breathe(){
        console.log('breathing...');
    }

    born(){
        console.log('new animal created')
    }

}

class Dog extends Animal {
    static nature = 'loyal'
    #home = 'My home'

    constructor(name, breed, color){
        super('Dog', name, 'earth') // Parámetros recibidos o fixed
        this.breed = breed
        this.color = color
    }

    makeNoise(){
        console.log('guau guau')
        console.log('My breed is',this.breed)
        console.log(Dog.nature)
    }

    eat(){
        this.makeNoise()
        console.log('brbrbrbrbrbrb')
    }

    static sleep(){
        console.log('zzzzzzz')
    }

    #play(){
        console.log('im playing')
    }

    breathe(){
        console.log('hmm... hm...')
    }

    get home(){
        return this.#home
    }

    set home(newHome){
        this.#home = newHome
    }
}

const victorio = new Dog('Victorio', 'pug', 'brown')
console.log(victorio.breed)
victorio.makeNoise()
victorio.breathe() // Sobreescritura de métodos (Override)
console.log(victorio.environment)
victorio.born()

//* IV Polimorfismo
// Definición de polimorfismo (manipulación con interfaz común)
// Polimorfismo estático
    // Decisión de ejecución de método en compilación
    // Sobrecarga de métodos
    // Interfaces
    // Herencia
// Polimorfismo dinámico
    // Clases no relacionadas
    // Saber qué objeto es se resuelve en ejecución
    // Puede mantenerse parametrizado

// No hereda de nada
class Cat {
    constructor(breed, color){
        this.breed = breed
        this.color = color
    }

    makeNoise(){
        console.log('miau')
    }
}
const milo = new Cat('persian','white')


function makeAnimalNoise(animal){
    animal.makeNoise()
}

console.log('---------------')
makeAnimalNoise(victorio)
makeAnimalNoise(milo)