// Chiedi all’utente il suo nome,
//  poi chiedi il suo cognome,
//  poi chiedi il suo colore preferito
//  Infine scrivi sulla pagina nomecognomecolorepreferito19

// creiamo variabili per nome, cognome e colore
var nome;
var cognome;
var colore;

// chiediamo all'utente di inserire i dati richiesti e li memorizziamo nelle variabili
nome = prompt("Inserisci il tuo nome");
cognome = prompt("Inserisci il tuo cognome");
colore = prompt("Inserisci il tuo colore preferito");

// visualizziamo a schermo la stringa composta dai valori inseriti dall'utente
document.getElementById('password').innerHTML = nome + cognome + colore + "19";