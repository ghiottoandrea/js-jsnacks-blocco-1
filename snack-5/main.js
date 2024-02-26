const odd = []

for (let i = 0; i < 6; i++){
    let numbers = Number(prompt("Inserisci un numero qui."))

    if (numbers % 2 === 0){
        console.log(numbers);

    }else{
        let oddnumbers = numbers
        odd.push(oddnumbers)
    }

}
console.log(odd);

let i = 0;
while (i < 6) {
    let numbers = Number(prompt("Inserisci un numero qui."))

    if (numbers % 2 === 0){
        console.log(numbers);

    }else{
        let oddnumbers = numbers
        odd.push(oddnumbers)
    }

    i++
}

console.log(odd);
