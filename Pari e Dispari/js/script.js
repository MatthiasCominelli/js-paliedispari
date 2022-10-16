// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const numero = document.getElementById('SceltaUtente');
const buttonVerifica = document.getElementById('bottone');

var scelta = prompt('Scegli pari o dispari?');
// console.log(scelta);




const check = function(){
    let numerostringa = document.getElementById('SceltaUtente').value;
    let numero = parseInt(numerostringa)
var numeroCheck = (numero + randomGenerator(1, 10));
console.log(numeroCheck);

if (scelta == 'pari' && isEven(numeroCheck) == true){
 alert('hai vinto');
}
else if (scelta == 'dispari' && isEven(numeroCheck)== false) {
  alert('hai vinto');
}
else {
  alert('hai perso');
}

// ------- funzioni
// random
function randomGenerator (){
    let random = Math.floor((Math.random() * 5) + 1);
    return random;
  
}


parseInt
// pari
function isEven (numero){
  if (numero % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}
}




buttonVerifica.addEventListener('click', check);