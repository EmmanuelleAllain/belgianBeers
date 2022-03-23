// ELEMENTS POUR LA BIERE QUI SUIT LA SOURIS (cette page n'est plus utile)

let cursor = document.querySelector('.cursor-beer');

document.addEventListener('mousemove', function(event){
  cursor.setAttribute('style', 'top:'+(event.pageY - 25)+'px; left:'+(event.pageX - 25)+'px;');
});
