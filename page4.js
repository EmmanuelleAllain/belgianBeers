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
  confirmationText.innerHTML = `Merci ${firstName.value} !<br>Votre inscription a bien été prise en compte <br>Voici le détail de votre réservation :<br> Nom : ${name.value} <br>Pénom : ${firstName.value}<br>Evénement choisi : ${eventSelect.value}<br>Nombre de personnes : ${numberSelect.value}`;
  confirmationText.classList.add('confirmation-text');
});

// ELEMENTS POUR LA BIERE QUI SUIT LA SOURIS

let beerIcon = document.querySelector(".beerIcon");

/*document.addEventListener = ('mousemove', function(event){
  $("#beer-icon-mousemove").animate({event.clientX, event.clientY});
})*/


window.addEventListener("mousemove", (event) => {
  const imgBeer = document.createElement("img");
  imgBeer.src = "./Icons/beer.png";
  /*$(".imgBeer").animate({event.clientX, event.clientY});
  console.log(`Position de la souris : X = ${event.clientX} | Y = ${event.clientY}`);*/
  imgBeer.style.left = event.clientX;
  imgBeer.style.top = event.clientY;
  /*mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";*/
});
/*window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});*/