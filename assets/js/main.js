// Creo due variabili per l'età dell'utente e i km che deve percorrere
// Assegno a queste due variabili dei valori tramite input utente
// Trasformo il tipo di variabile da stringa a numero

const userAge = Number(prompt("Inserisca l'età del passeggero"));
console.log(userAge);

const travelDistance = Number(prompt("Inserisca la distanza da percorrere (in km)"));
console.log(travelDistance);

// Creo una costante per il prezzo al km del biglietto (0.21€)

const ticketBasePrice = 0.21;
console.log(ticketBasePrice);

// Creo una varaibile e le assegno il prezzo del biglietto dell'utente (sarà 0.21 moltiplicato il valore della variabile "km da percorrere")

let ticketFinalPrice = ticketBasePrice * travelDistance;
console.log(ticketFinalPrice);