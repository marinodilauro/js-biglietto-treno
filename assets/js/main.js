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

// Creo due variabili per lo sconto ai minorenni e per lo sconto agli over 65 anni

const minorsDiscount = 0.2;
const seniorsDiscount = 0.4;

// Verifico l'età dell'utente per applicare lo sconto e stampo il prezzo del biglietto a schermo

if (userAge < 18) {
  const ticketMinorsPrice = ticketFinalPrice - (ticketFinalPrice * minorsDiscount);
  alert(`Il biglietto costerà ${ticketMinorsPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`);
} else if (userAge >= 18 && userAge <= 65) {
  alert(`Il biglietto costerà ${ticketFinalPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`);
} else {
  const ticketSeniorsPrice = ticketFinalPrice - (ticketFinalPrice * seniorsDiscount);
  alert(`Il biglietto costerà ${ticketSeniorsPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`);
}