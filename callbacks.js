    //! Muestra de acciones asíncronas
let seconds = 5
setTimeout(() => {
    console.log("Hello", seconds, "seconds later");
}, seconds * 1000);

console.log('This code will be printed before');
console.log('This code too')

// Simulating database fetching
const books = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}

let myBooks;

const fetchBooks = () => {
    console.log('Starting books fetching');
    setTimeout(() => { //askBooksFromDatabase()
        myBooks = books;
        console.log('fetched...')
        if(!myBooks){
            console.log('something went wrong :(');
        }
    }, 2000);
    console.log(myBooks);
}

fetchBooks();

    //! Callbacks Asíncronos

const booksv2 = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}

const fetchBooksV2 = (actionToTake) => {
    console.log('Statring books fetching');
    setTimeout(() => {
        myBooks = booksv2;
        if(!myBooks){
            console.log('something went wrong :(');
        }
        actionToTake(myBooks)
    }, 2000);
}

fetchBooksV2((booksv2) => {
    console.log('Showing books collection');
    console.log(booksv2);
});


