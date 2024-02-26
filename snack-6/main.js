//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente.

let N = Number(prompt("Inserisci per quanti numeri fare il cubo"))

for (let i = 0; i < N; i++){
    let number = i;
    let cubenumber = i * i * i;
    console.log(cubenumber);
}

