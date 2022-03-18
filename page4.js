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