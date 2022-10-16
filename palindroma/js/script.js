//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

const parolaUtente = document.getElementById('parolaUtente');
const buttonVerifica = document.getElementById('bottone');
const contenitoreRisultato = document.getElementById('Risultato');

const check = function(){
    let parolaUtente = document.getElementById('parolaUtente');


let parolaGirata = rovesciaParola(parolaUtente);
console.log(parolaGirata);

if (parolaGirata == parolaUtente){
  alert ('è palindroma');
}
else{
alert ('non è palindroma');
}

}

function rovesciaParola(parolaf){
    var parolaReverse = '';
  
    for (var i = parolaf.length - 1; i >=0; i--){
      parolaReverse += parolaf [i];
    }
    return parolaReverse;
  }

buttonVerifica.addEventListener('click', check);

