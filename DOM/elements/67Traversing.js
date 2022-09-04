//* Recorriendo el DOM
const $cards = document.querySelector('.cards')

console.log($cards);

for (let i = 0; i < $cards.childElementCount; i++) console.log($cards.children[i])

console.log($cards.parentElement); // retorna el elemento "body"

console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.

console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
console.log($cards.lastElementChild); // obtiene el último "Elemento" hijo

console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"

console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
console.log($cards.closest("body"));

console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3