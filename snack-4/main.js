//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const list = ["andrea", "franc", "gianni" , "luca"]
console.log(list);
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
const userName = prompt("Inserisci il tuo nome")
let invitation = false;

for (let i = 0; i < list.length; i++) {
    const name = list[i];
    
    if( name === userName){
        invitation = true;
        break;
    }
}

console.log(invitation);

if (invitation === true){
    alert("BENVENUTO ALLA FESTA")
}else{
    alert("NON SEI STATO INVITATO, MI DISPIACE")
}