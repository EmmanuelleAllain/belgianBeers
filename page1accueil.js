const menuButton = document.querySelector(".menuButton");
const menuList = document.querySelector(".ulHeader");
const listFirstPage = document.querySelector(".firstList");
const listSecondPage = document.querySelector(".secondList");
const listThirdPage = document.querySelector(".thirdList");

listFirstPage.addEventListener("mouseover", () => {
  listFirstPage.style.background = "grey";
});

listSecondPage.addEventListener("mouseover", () => {
  listSecondPage.style.background = "black";
});

listThirdPage.addEventListener("mouseover", () => {
  listThirdPage.style.background = "black";
});

listFirstPage.addEventListener("mouseout", () => {
  listFirstPage.style.background = "";
});

listSecondPage.addEventListener("mouseout", () => {
  listSecondPage.style.background = "";
});

listThirdPage.addEventListener("mouseout", () => {
  listThirdPage.style.background = "";
});

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("menuBurger");
});
