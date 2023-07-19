const username = prompt(" Inserisci il tuo nome");
const surname = prompt("inserisci il tuo cognome");
let favouritecolor = prompt("inserisci il colore preferito");
favouritecolor = favouritecolor + "21";

const lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, cum!";

const welcomeMessage = `
 <h3>Benvenuto ${username} ${surname} </h3>

 <h2> ${username} ${surname} ${favouritecolor}</h2> `;

document.getElementById("userinfo").innerHTML = welcomeMessage;
