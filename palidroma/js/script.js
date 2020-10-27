// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var testo, parola, pali;
var stampa = document.getElementById("risultato");

// l'utente inserisce una parola
  testo = prompt("inserisci una parola");
  console.log("la parola inserita e' ", testo);

// creo una funzione per invertire la parola
function reverseString(str) {
  parola = str.split("").reverse().join("");
  // str.split("") per trasformarlo in un array
  // .reverse() per invertire gli elementi
  // join("") per ritrasformarlo in una stringa
  return parola
}

// creo una funzione per capire se la parola e' palindroma
function palindroma(str){
  if (str === reverseString(str)) {
    pali = " la parola e' palindroma";
  } else {
    pali = " la parola non e' palindroma";
  }
  return pali
}

// output
stampa.innerHTML = reverseString(testo) + palindroma(testo);
