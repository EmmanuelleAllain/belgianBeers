// ELEMENTS POUR LA BIERE QUI SUIT LA SOURIS

let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(event){
  cursor.setAttribute('style', 'top:'+(event.pageY - 25)+'px; left:'+(event.pageX - 25)+'px;');
});
