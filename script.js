console.log('JS OK');

// Esercizio 1: Mail.
/*
1. Creare un array di email;
2. Chiedere all’utente la sua email;
3. Controllare che sia nella lista di chi può accedere, stampare un messaggio appropriato in console sull’esito del controllo;
*/

// Esercizio 2: Gioco dei dadi.
/*
1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer;
2. Stabilire il vincitore, in base a chi fa il punteggio più alto;
3. Stampare in console i tiri di dado e il risultato;
*/

// Svolgimento esercizio 1

// Punto 1

const emails = ['pinco.pallino@hotmail.com', 'vivalafazza@trucko.com', 'theweekndofficial@gmail.com'];

console.table(emails);

// Punto 2 

const userEmail = prompt("Qual'è la tua email?");

console.log(userEmail);

// Punto 3

let found = false;

for (let i = 0; i < emails.length; i++) {
    const emailControl = emails[i];
    if (emailControl === userEmail) {
        found = true;
    }
}

if (found) {
    console.log("L'email è corretta");
} else {
    console.log("l'email è sbagliata");
}
// Svolgimento esercizio 2

// Punto 1 & 3

const myNumber = Math.floor(Math.random() * 6) + 1;
console.log(myNumber);

const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);

// Punto 2

if (myNumber > cpuNumber) {
    console.log('Hai vinto!')
} else if (myNumber < cpuNumber) {
    console.log('Hai perso!')
} else {
    console.log('Pareggio!')
}