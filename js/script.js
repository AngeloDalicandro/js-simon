// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Salvo 5 numeri random in una array
const numbersToMemorize = genterateNumbers(1, 1000);
// Creo un array per salvare i numeri comunicati dall'utente
let userNumbers = [];
// Creo un alert per comunicare all'utente in 5 numeri da memorizzare
alert(numbersToMemorize)
// Imposto il timer per far partire allo scadere dei 30 secondi un ciclo for
setTimeout(askUser, 30000);
//NEL CICLO FOR CHE SI RIPETE 5 VOLTE
function askUser() {
    for(let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt('dammi un numero'));
        // Se il numeri digitati dall'utente è nell'array
        // Pusho la selezione dell'utente nel secondo array
        if(numbersToMemorize.includes(userNumber)) {
            userNumbers.push(userNumber);
        }
    }
    // Alla fine del ciclo comunico all'utente quali numeri ha ricordato 
    alert(`Hai indovinato ${userNumbers.length} numeri: ${userNumbers}`);
}

// Creo una funzione per generare dei numeri random ( da W3Schools )
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Creo una funzione per popolare l'array
function genterateNumbers(min, max) {
    let  numbersToMemorize = [];
    for( let i = 0; i < 5; i++ ) {
        numbersToMemorize.push(getRndInteger(min, max));
    }
    return numbersToMemorize;
}