const belgianBeersTop10 = [

    {
        name: "Maredsous",
        bitterness: "2 / 5",
        proof: "10°",
        type: "Triple d'Abbaye",
        beerspicture: "",
        beersdescription: "Saveurs de caramel, d'épices, de fruits et de bois.",
    },
    {
        name: "Rochefort 6",
        bitterness: "2 / 5",
        proof: "7,5°",
        type: "Dubbel trappiste",
        color: "Brune",
        beerspicture: "",
        beersdescription: "Equilibre entre sucre et amertume",
    },
    {
        name: "Saint Feuillien blonde",
        bitterness: "2 / 5",
        proof: "7,5°",
        type: "Pale Ale d'Abbaye",
        color: "Blonde",
        beerspicture: "",
        beersdescription: "Saveurs de blé, de coriandre, d'épices et de levure.",
    },
    {
        name: "Paix Dieu",
        bitterness: "2 / 5",
        proof: "10°",
        type: "Triple",
        color: "Blonde",
        beerspicture: "",
        beersdescription: "Saveurs douces et houblonnées, avec des notes de fruits, de levure, de coriandre et d'épices.",
    },
    {
        name: "Corne du bois des pendus black",
        bitterness: "2 / 5",
        proof: "8°",
        type: "Strong Ale",
        color: "Noire",
        beerspicture: "",
        beersdescription: "Saveurs puissantes de chocolat, de café, de caramel, de malt torréfié, de vieux rhum, de chêne et d'alcool.",
    },
    {
        name: "Troubadour magma",
        bitterness: "3 / 5",
        proof: "9°",
        type: "IPA",
        color: "Ambrée",
        beerspicture: "",
        beersdescription: "Saveurs de houblon, de malt, de levure, d'épices, d'agrumes et de caramel.",
    },
    {
        name: "Hoegaarden",
        bitterness: "1 / 5",
        proof: "4,9°",
        type: "Blanche",
        color: "Blanche",
        beerspicture: "",
        beersdescription: "Goût fruité, douce présence de la coriandre et belle amertume",
    },
    {
        name: "Mort Subite Gueuze Lambic",
        bitterness: "2 / 5",
        proof: "4,5°",
        type: "Lambic",
        color: "Blonde",
        beerspicture: "",
        beersdescription: "Avec son goût acidulé, et quelques notes de pommes vertes et de fruits, cette bière saura attirer les adeptes de finesse et de légèreté.",
    },
    {
        name: "Peche mel’Bush",
        bitterness: "1 / 5",
        proof: "8,5°",
        type: "Lambic",
        color: "Ambrée",
        beerspicture: "",
        beersdescription: "Saveurs de pêche, de malt et de miel.",
    },
    {
        name: "Lupulus Hopera",
        bitterness: "2 / 5",
        proof: "6°",
        type: "Pale Ale",
        color: "Blonde",
        beerspicture: "",
        beersdescription: "Saveurs de malt, de houblon, de fleurs, d'épices et de levure.",
    },

];

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