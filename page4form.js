// ELEMENTS POUR LE FORMULAIRE
const form = document.querySelector("form");
const confirmationText = document.createElement('p');
const confirmationDiv = document.querySelector("#conf-div");
const firstName = document.getElementById("firstName");
const name = document.getElementById("name");
const email = document.getElementById("email");
const eventSelect = document.getElementById("event-select");
const numberSelect = document.getElementById("number-select");

//element pour le bouton refresh formulaire
const buttonRefresh = document.createElement('button');

// Au clic, les éléments sélectionnés par l'internaute apparaissent et le formulaire disparait
form.addEventListener ("submit", function(event) {
  event.preventDefault();
  form.remove();
  confirmationDiv.classList.add("confirmation-container");
  confirmationDiv.appendChild(confirmationText);
  confirmationText.classList.add("conf-text");
  confirmationText.innerHTML = `<strong>Merci ${firstName.value}</strong> !<br>Voici le détail de votre réservation :<br> Nom : ${name.value} <br>Pénom : ${firstName.value}<br>Evénement choisi : ${eventSelect.value}<br>Nombre de personnes : ${numberSelect.value}`;
  confirmationDiv.appendChild(buttonRefresh);
  buttonRefresh.innerHTML = `<a href="indexPage4.html">Retour</a>`;
  buttonRefresh.classList.add("button-refresh");
});