//Chiedi un numero di 4 cifre all’utente
//Calcola la somma di tutte le cifre che compongono il numero

let number = prompt("Inserisci un numero a 4 cifre")

let sum = 0;


for (let i = 0; i < number.length; i++) {
    let singleN = number[i];
    singleN = Number(singleN)

    sum += singleN
    
}
console.log(sum);