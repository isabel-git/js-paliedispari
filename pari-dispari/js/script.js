// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var sceltaUte, numeroUte, numeroPc, somma;
var container = "";
var stampa = document.getElementById("risultato")

// INPUT
  // l'utente sceglie pari o Dispari
    sceltaUte = prompt("Inserisci Pari o Dispari");
    console.log("l'utente ha scelto ",sceltaUte);

  // l'utente inserisce un numero da 1 a 5
    numeroUte = parseInt(prompt("Scegli un numero tra 1 e 5"));
    console.log("l'utente ha scelto ",numeroUte);

// OPERAZIONI
  // creo funzione random
  function myRandom() {
    numeroPc = Math.floor(Math.random() * 5) + 1;
    return numeroPc;
  }

  // sommo i due numeri
  somma = numeroUte + myRandom();
  console.log("la somma dei due numeri e' ",somma);

  // stabilisco se la somma dei numeri e' pari o dispari
  function pariDispari() {
    if (somma % 2 === 0) {
      container = "pari";
    } else {
      container = "dispari";
    }
    return container;
  }

// OUTPUT
  if (pariDispari() === sceltaUte) {
    stampa.innerHTML = "hai vinto!";
  } else {
    stampa.innerHTML = "hai perso!";
  }
