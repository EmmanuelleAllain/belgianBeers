const menuButton = document.querySelector(".menuButton");
const menuList = document.querySelector("ul");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("menuBurger");
});

const belgianBeersTop10 = [
  {
    name: "Maredsous",
    bitterness: "2 / 5",
    proof: "10°",
    type: "Triple d'Abbaye",
    beerspicture:
      "/home/utilisateur/wcs-2022/belgianBeers/beers_pictures/Corne_du_bois_des_pendus.png",
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
    beersdescription:
      "Saveurs douces et houblonnées, avec des notes de fruits, de levure, de coriandre et d'épices.",
  },
  {
    name: "Corne du bois des pendus black",
    bitterness: "2 / 5",
    proof: "8°",
    type: "Strong Ale",
    color: "Noire",
    beerspicture: "",
    beersdescription:
      "Saveurs puissantes de chocolat, de café, de caramel, de malt torréfié, de vieux rhum, de chêne et d'alcool.",
  },
  {
    name: "Troubadour magma",
    bitterness: "3 / 5",
    proof: "9°",
    type: "IPA",
    color: "Ambrée",
    beerspicture: "",
    beersdescription:
      "Saveurs de houblon, de malt, de levure, d'épices, d'agrumes et de caramel.",
  },
  {
    name: "Hoegaarden",
    bitterness: "1 / 5",
    proof: "4,9°",
    type: "Blanche",
    color: "Blanche",
    beerspicture: "",
    beersdescription:
      "Goût fruité, douce présence de la coriandre et belle amertume",
  },
  {
    name: "Mort Subite Gueuze Lambic",
    bitterness: "2 / 5",
    proof: "4,5°",
    type: "Lambic",
    color: "Blonde",
    beerspicture: "",
    beersdescription:
      "Avec son goût acidulé, et quelques notes de pommes vertes et de fruits, cette bière saura attirer les adeptes de finesse et de légèreté.",
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
    beersdescription:
      "Saveurs de malt, de houblon, de fleurs, d'épices et de levure.",
  },
];