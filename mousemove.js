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