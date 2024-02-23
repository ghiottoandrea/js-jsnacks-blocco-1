//L’utente inserisce due parole in successione, con due prompt.
const firstword = prompt("Inserisci una parola")
const secondword = prompt("Inserisci una seconda parola")
console.log(firstword, secondword);

const firstLength = firstword.length
const secondtLength = secondword.length
console.log(firstLength, secondtLength);

//Il software stampa prima la parola più corta, poi la parola più lunga.
if (firstLength > secondtLength){
    console.log(firstword);
    alert("La parola più corta è "+secondtword+" e quella più lunga è "+ firstword)

}else if (firstLength < secondtLength){
    console.log(secondword);
    alert("La parola più corta è "+firstword+" e quella più lunga è "+ secondword)

}else{
    alert("Le parole hanno la stessa lunghezza")
}