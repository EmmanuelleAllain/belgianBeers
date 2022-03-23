const menuButton = document.querySelector(".menuButton");
const menuList = document.querySelector(".ulHeader");
const listFirstPage = document.querySelector(".firstList");
const listSecondPage = document.querySelector(".secondList");
const listeThirdPage = document.querySelector(".ThirdList");

listFirstPage.addEventListener("mouseover", () => {
  listFirstPage.style.background = "grey";
});

listSecondPage.addEventListener("mouseover", () => {
  listSecondPage.style.background = "black";
});

listeThirdPage.addEventListener("mouseover", () => {
  listeThirdPage.style.background = "black";
});

listFirstPage.addEventListener("mouseout", () => {
  listFirstPage.style.background = "";
});

listSecondPage.addEventListener("mouseout", () => {
  listSecondPage.style.background = "";
});

listeThirdPage.addEventListener("mouseout", () => {
  listeThirdPage.style.background = "";
});

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("menuBurger");
});

const cards = document.querySelector(".cards");

const belgianBeersTop10 = [
  {
    name: "Maredsous",
    bitterness: "2 / 5",
    proof: "10°",
    type: "Triple d'Abbaye",
    beerspicture: "url('beers_pictures/Maredsous triple.png')",
    beersdescription: "Saveurs de caramel, d'épices, de fruits et de bois.",
  },
  {
    name: "Rochefort 6",
    bitterness: "2 / 5",
    proof: "7,5°",
    type: "Dubbel trappiste",
    color: "Brune",
    beerspicture: "url('beers_pictures/Rochefort 6.png')",
    beersdescription: "Equilibre entre sucre et amertume",
  },
  {
    name: "Saint Feuillien blonde",
    bitterness: "2 / 5",
    proof: "7,5°",
    type: "Pale Ale d'Abbaye",
    color: "Blonde",
    beerspicture: "url('beers_pictures/St Feuillien blonde.png')",
    beersdescription: "Saveurs de blé, de coriandre, d'épices et de levure.",
  },
  {
    name: "Paix Dieu",
    bitterness: "2 / 5",
    proof: "10°",
    type: "Triple",
    color: "Blonde",
    beerspicture: "url('beers_pictures/Paix dieu.png')",
    beersdescription:
      "Saveurs douces et houblonnées, avec des notes de fruits, de levure, de coriandre et d'épices.",
  },
  {
    name: "Corne du bois des pendus black",
    bitterness: "2 / 5",
    proof: "8°",
    type: "Strong Ale",
    color: "Noire",
    beerspicture: "url('beers_pictures/Corne du bois des pendus black.png')",
    beersdescription:
      "Saveurs puissantes de chocolat, de café, de caramel, de malt torréfié, de vieux rhum, de chêne et d'alcool.",
  },
  {
    name: "Troubadour magma",
    bitterness: "3 / 5",
    proof: "9°",
    type: "IPA",
    color: "Ambrée",
    beerspicture: "url('beers_pictures/Troubadour magma.png')",
    beersdescription:
      "Saveurs de houblon, de malt, de levure, d'épices, d'agrumes et de caramel.",
  },
  {
    name: "Hoegaarden",
    bitterness: "1 / 5",
    proof: "4,9°",
    type: "Blanche",
    color: "Blanche",
    beerspicture: "url('beers_pictures/Hoegaarden blanche.png')",
    beersdescription:
      "Goût fruité, douce présence de la coriandre et belle amertume",
  },
  {
    name: "Mort Subite Gueuze Lambic",
    bitterness: "2 / 5",
    proof: "4,5°",
    type: "Lambic",
    color: "Blonde",
    beerspicture: "url('beers_pictures/Mort Subite Gueuze Lambic.png')",
    beersdescription:
      "Avec son goût acidulé, et quelques notes de pommes vertes et de fruits, cette bière saura attirer les adeptes de finesse et de légèreté.",
  },
  {
    name: "Peche mel’Bush",
    bitterness: "1 / 5",
    proof: "8,5°",
    type: "Lambic",
    color: "Ambrée",
    beerspicture: "url('beers_pictures/Peche mel’Bush.png')",
    beersdescription: "Saveurs de pêche, de malt et de miel.",
  },
  {
    name: "Lupulus Hopera",
    bitterness: "2 / 5",
    proof: "6°",
    type: "Pale Ale",
    color: "Blonde",
    beerspicture: "url('beers_pictures/Lupulus Hopera.png')",
    beersdescription:
      "Saveurs de malt, de houblon, de fleurs, d'épices et de levure.",
  },
];

function createCard(title, bitterness, proof, type, description, picture) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `${picture}`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  // Step1: Create the cardBody div, add the class card-body and add it to the card

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = `${title}`;
  cardBody.appendChild(cardTitle);

  const cardBitterness = document.createElement("div");
  cardBitterness.classList.add("card-bitterness");
  cardBitterness.innerHTML = `Amertume : ${bitterness}`;
  cardBody.appendChild(cardBitterness);

  const cardProof = document.createElement("div");
  cardProof.classList.add("card-proof");
  cardProof.innerHTML = `Alcool : ${proof}`;
  cardBody.appendChild(cardProof);

  const cardType = document.createElement("div");
  cardType.classList.add("card-type");
  cardType.innerHTML = `Type : ${type}`;
  cardBody.appendChild(cardType);

  const cardDescription = document.createElement("div");
  cardDescription.classList.add("card-description");
  cardDescription.innerHTML = `<br>Description : ${description}`;
  cardBody.appendChild(cardDescription);


  card.addEventListener ('click', function () {
    if (window.matchMedia("(max-width: 800px)").matches) {

      if(cardImg.innerHTML == `${description}`) {
      cardImg.innerHTML = ``;
      cardImg.style.backgroundColor = "white";
      //cardImg.style.backgroundImage.opacity= "0.5";
      //cardImg.style.backgroundImage= "`${picture}`";

          } else {
          cardImg.innerHTML = `${description}`;
          cardImg.style.backgroundColor = "rgba(0,0,0, 0.5)";
          cardImg.style.color = "white";
          cardImg.style.fontStyle= "italic";
          cardImg.style.textAlign= "center";
          //cardImg.style.backgroundImage= "none";
          cardImg.style.fontSize= "3vh";
          };
    };
    
  }, false);







}

/* Step 4: Create a for loop, for each element of the array, 
   call the function createCard with the corresponding parameter */

for (let i = 0; i < belgianBeersTop10.length; i++) {
  createCard(
    belgianBeersTop10[i].name,
    belgianBeersTop10[i].bitterness,
    belgianBeersTop10[i].proof,
    belgianBeersTop10[i].type,
    belgianBeersTop10[i].beersdescription,
    belgianBeersTop10[i].beerspicture
  );
<<<<<<< HEAD
}

/*cardHeader.onclick = function(){
  imgOpacity.style.backgroundColor = rgba(255,255,255,0.5);
};*/

const opacity = document.querySelector(".card-img");
const descriptionAppears = document.querySelector(".card-description");

opacity.addEventListener("click", function () {
  descriptionAppears.display = "initial";
});
=======


}
>>>>>>> 545173cb360fd3ef0641057491830f315e23b640
