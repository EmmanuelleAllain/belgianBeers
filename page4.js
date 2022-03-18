// ELEMENTS POUR LE FORMULAIRE
const form = document.querySelector("form");
const confirmationText = document.createElement('p');
const confirmationDiv = document.getElementById('confirmation-container');
const firstName = document.getElementById("firstName");
const name = document.getElementById("name");
const email = document.getElementById("email");
const eventSelect = document.getElementById("event-select");
const numberSelect = document.getElementById("number-select");

// Au clic, les éléments sélectionnés par l'internaute apparaisse sous le formulaire
form.addEventListener ("submit", function(event) {
  event.preventDefault();
  confirmationDiv.appendChild(confirmationText);
  confirmationText.innerText = `Merci ${firstName.value} ! Votre inscription a bien été prise en compte voici le détail de votre réservation : Nom : ${name.value} Pénom : ${firstName.value} Evénement choisi : ${eventSelect.value} Nombre de personnes : ${numberSelect.value}`;
  confirmationText.classList.add('confirmation-text');
});

// ELEMENTS POUR LA BIERE QUI SUIT LA SOURIS

const beerIcon = document.querySelector("beer-icon");
const beerIconMousemove = document.querySelector("beer-icon-mousemove");
/*document.addEventListener = ('mousemove', function(event){
  $("#beer-icon-mousemove").animate({event.clientX, event.clientY});
})*/


window.addEventListener("mousemove", (event) => {
  beerIcon.classList.toggle("beerIconMousemove")
  
  console.log(`Position de la souris : X = ${event.clientX} | Y = ${event.clientY}`);
  /*mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";*/
});
/*window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});*/