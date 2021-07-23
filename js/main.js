//Pari e Dispari
// 1 - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtentePariDispari = prompt("scegli pari o dispari");
console.log("L'utente ha scelto " + sceltaUtentePariDispari)

var sceltaUtenteNumeri = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("L'utente ha scelto il numero " + sceltaUtenteNumeri);

// 2 - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function rndNumeri (min, max) {
    var risultato = Math.floor(Math.random() * (max - min)) + min;
    return risultato;
}
var risultatoComputer = rndNumeri(1,5);
console.log("Il computer ha scelto il numero " + risultatoComputer);

// 3 - Sommiamo i due numeri
function sommaNumeriUeC (numeri1, numeri2) {
    somma= numeri1 + numeri2;
    return somma;
}
var somma = sommaNumeriUeC(sceltaUtenteNumeri, risultatoComputer);
console.log("La somma tra i due numeri è " + somma);

// 4 - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariDispari (x) {
    if ((x % 2 ) == 0) {
        return "pari"; 
    }  
    return "dispari";    
}
var pari_dispari = pariDispari(somma);
console.log(pari_dispari);
// 5 - Dichiariamo chi ha vinto.

if (sceltaUtentePariDispari == somma) {
    console.log("L'utente ha vinto");
} else {
    console.log("L'utente ha perso");
}


