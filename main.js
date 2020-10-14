// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1). Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata. Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

var userNumberOne = Math.floor(Math.random() * 6) + 1;

console.log(userNumberOne);
document.getElementById('dice1').innerHTML = userNumberOne;

var userNumberTwo  = Math.floor(Math.random() * 6) + 1;

console.log(userNumberTwo);
document.getElementById('dice2').innerHTML = userNumberTwo;


if (userNumberOne < userNumberTwo) {
    console.log('Utente 2: hai vinto!')
} else if (userNumberOne > userNumberTwo) {
    console.log('Utente 1: hai vinto!')
} else {
    console.log('I numeri usciti sono uguali. Riprova!');
}
