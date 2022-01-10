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

const userEmail = prompt("Qual'è la tua email?", "pinco.pallino@hotmail.com");

console.log(userEmail);

// Punto 3

for (i = 0; i < emails.length; i++) {
    if (i === userEmail) {
        console.log("L'email ' corretta")
    }
}