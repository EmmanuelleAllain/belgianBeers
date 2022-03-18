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
  confirmationText.classList.add("conf-text");
  confirmationText.innerHTML = `<strong>Merci ${firstName.value}</strong> !<br>Voici le détail de votre réservation :<br> Nom : ${name.value} <br>Pénom : ${firstName.value}<br>Evénement choisi : ${eventSelect.value}<br>Nombre de personnes : ${numberSelect.value}`;
  confirmationText.classList.add('confirmation-text');
});

